import { useEffect, useState } from "react";
import { auth, userExist } from "../firebase/firebase";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";

import AuthProvider from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function LoginView() {
  const navigate = useNavigate();
  // const [currentUser, setCurrenUser] = useState(null);
  /*
    state
    0: inicializado
    1: loading
    2: loginCompleto
    3: login pero sin registro
    4: no hay nadie logueado
  */
  const [state, setCurrentState] = useState(0);

  // useEffect(() => {
  //   setCurrentState(1);
  //   //detectamos si el usuario ya esta logueado o no
  //   onAuthStateChanged(auth, handleUserStateChanged);
  // }, [navigate]);

  // const handleUserStateChanged = async (user) => {
  //   if (user) {
  //     const isRegistered = await userExist(user.uid); //todas las funciones en firebase son asincronas, siempre tenemos que esperar por ellas
  //     if (isRegistered) {
  //       // Redirigir a dashboard
  //       navigate("/dashboard");
  //       setCurrentState(2);
  //     } else {
  //       // Redirigir a choose username
  //       navigate("/choose-username");
  //       setCurrentState(3);
  //     }
  //     console.log(user.displayName);
  //   } else {
  //     setCurrentState(4);
  //     console.log("No hay nadie autenticado");
  //   }
  // };

  const handleOnClick = async () => {
    const googleProvider = new GoogleAuthProvider();

    const singInWithGoogle = async (googleProvider) => {
      try {
        const res = await signInWithPopup(auth, googleProvider);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    await singInWithGoogle(googleProvider);
  };

  const onUserLoggedIn = (user) => {
    navigate("/dashboard");
  };
  const onUserNotRegistered = (user) => {
    navigate("/choose-username");
  };
  const onUserNotLoggedIn = () => {
    setCurrentState(4);
  };

  if (state === 2) {
    return <div>Estas autenticado y registrado</div>;
  }

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

  return (
    <AuthProvider
      onUserLoggedIn={onUserLoggedIn}
      onUserNotLoggedIn={onUserNotLoggedIn}
      onUserNotRegistered={onUserNotRegistered}
    >
      <div>Loading...</div>
    </AuthProvider>
  );
}
