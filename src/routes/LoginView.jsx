import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";

export default function LoginView() {
  const [currentUser, setCurrenUser] = useState(null);
  /*
    state
    0: inicializado
    1: loading
    2: loginCompleto
    3: login pero sin registro
    4: no hay nadie logueado
  */
  const [state, setCurrentState] = useState(0);

  useEffect(() => {
    setCurrentState(1);
    //detectamos si el usuario ya esta logueado o no
    onAuthStateChanged(auth, handleUserStateChanged);
  }, []);

  const handleUserStateChanged = (user) => {
    if (user) {
      setCurrentState(3);
      console.log(user.displayName);
    } else {
      setCurrentState(4);
      console.log("No hay nadie autenticado");
    }
  };

  const handleOnClick = async () => {
    const googleProvider = new GoogleAuthProvider();

    await singInWithGoogle(googleProvider);

    const singInWithGoogle = async (googleProvider) => {
      try {
        const res = await signInWithPopup(auth, googleProvider);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
  };

 
  if (state === 3) {
    return <div>Estas autenticado pero no registrado</div>;
  }

  if (state === 4) {
    return (
      <div>
        <button onClick={handleOnClick}>Login with Google</button>
      </div>
    );
  }
 
  return <div>Loading...</div>
}
