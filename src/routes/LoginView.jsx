import { useState } from "react";
import { auth } from "../firebase/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import AuthProvider from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function LoginView() {

  const navigate = useNavigate();

  /*
    state
    0: inicializado
    1: loading
    2: loginCompleto
    3: login pero sin registro
    4: no hay nadie logueado
    5: ya existe el username
    6: nuevo username, click para continuar
  */
  const [state, setCurrentState] = useState(0);

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

  if (state === 5) {
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
