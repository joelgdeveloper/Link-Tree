import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBytes,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const db = getFirestore(app);
const storage = getStorage(app);

//Funciones de firebase
export const userExist = async (uid) => {
  //las consultas a nuestras bases de datos funcionan con referencias
  //nosotros especificamos a donde queremos buscar la referencia y
  //despues mandamos a llamar a la funcion que busca la referencia
  // hay dos formas de crear documentos en firebase, 1 es dejar que le asigne un id especifico o lo hacemos
  //nosotros, como en este caso
  const docRef = doc(db, "users", uid);

  //funcion que busca la referencia
  const res = await getDoc(docRef);
  // console.log(docRef);
  // console.log(res);
  //console.log(res.exists()); //nos arroja false / true

  //hay 3 metodos, 1 data nos regresa la informacion de ese documento, 2 exists nos regresa true o false
  //3 get nos retorna el documento
  return res.exists(); //nos regresa true o false, nos dice si el documento existe o no
};

export const existsUserName = async (username) => {
  const users = [];
  const docsRef = collection(db, "users");
  const q = query(docsRef, where("username", "==", username));

  const querySnapshot = await getDocs(q); //nos dara un resultado, si no existe nuestro arreglo estara vacio

  querySnapshot.forEach((doc) => {
    users.push(doc.data());
  });

  return users.length > 0 ? users[0].uid : null;
};

export const registerNewUser = async (user) => {
  try {
    const collectionRef = collection(db, "users");
    const docRef = doc(collectionRef, user.uid);
    //hay dos formas de generar un documento, una con addDoc y otra con setDoc
    //usamos addDoc cuando no nos importa como se va a llamar el documento
    await setDoc(docRef, user);
  } catch (error) {}
};

export const updateUser = async (user) => {
  try {
    const collectionRef = collection(db, "users");
    const docRef = doc(collectionRef, user.uid);
    await setDoc(docRef, user);
  } catch (error) {}
};

export const getUserInfo = async (uid) => {
  try {
    const docRef = doc(db, "users", uid);
    const document = await getDoc(docRef);

    return document.data();
  } catch (error) {}
};

export const insertNewLink = async (link) => {
  try {
    const docRef = collection(db, "links");
    const res = await addDoc(docRef, link);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getLinks = async (uid) => {
  const links = [];
  try {
    const collectionRef = collection(db, "links");
    const q = query(collectionRef, where("uid", "==", uid));
    const querySnapshot = await getDocs(q); //nos trae un arreglo de resultados

    querySnapshot.forEach((doc) => {
      const link = { ...doc.data() };
      link.docId = doc.id;
      links.push(link);
    });

    return links;
  } catch (error) {
    console.log(error);
  }
};

export const updateLink = async (docId, link) => {
  try {
    const docRef = doc(db, "links", docId);
    const res = await setDoc(docRef, link);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const deleteLink = async (docId) => {
  try {
    const docRef = doc(db, "links", docId);
    const res = await deleteDoc(docRef);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const setUserProfilePhoto = async (uid, file) => {
  try {
    const imageRef = ref(storage, `images/${uid}`);
    const resUpload = await uploadBytes(imageRef, file);
    return resUpload;
  } catch (error) {
    console.log(error);
  }
};

export const getProfilePhotoUrl = async (profilePicture) => {
  try {
    const imageRef = ref(storage, profilePicture);
    const url = await getDownloadURL(imageRef);

    return url;
  } catch (error) {
    console.log(error);
  }
};

export const getUserPublicProfileInfo = async (uid) => {
  const profileInfo = await getUserInfo(uid); //me regresa la info especifica de un usuario
  const linksInfo = await getLinks(uid); //obtengo los links

  return {
    profileInfo,
    linksInfo,
  };
};

export const logout = async() => {
  await auth.signOut();
}
