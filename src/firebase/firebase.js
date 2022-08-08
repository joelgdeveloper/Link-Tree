import { initializeApp } from "firebase/app";
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
import { getAuth } from "firebase/auth";
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
  console.log(docRef);
  console.log(res);
  console.log(res.exists()); //nos arroja false

  //hay 3 metodos, 1 data nos regresa la informacion de ese documento, 2 exists nos regresa true o false
  //3 get nos retorna el documento
  return res.exists(); //nos regresa true o false, nos dice si el documento existe o no
};
