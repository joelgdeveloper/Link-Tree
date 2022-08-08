import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, userExist } from "../firebase/firebase";

import { useNavigate } from "react-router-dom";

const AuthProvider = ({
  children,
  onUserLoggedIn,
  onUserNotLoggedIn,
  onUserNotRegistered,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    //detectamos si el usuario ya esta logueado o no
    onAuthStateChanged(auth, handleUserStateChanged);
  }, [navigate, onUserLoggedIn, onUserNotLoggedIn, onUserNotRegistered]);

  const handleUserStateChanged = async (user) => {
    if (user) {
      const isRegistered = await userExist(user.uid); //todas las funciones en firebase son asincronas, siempre tenemos que esperar por ellas
      console.log(isRegistered);
      if (isRegistered) {
        // Redirigir a dashboard
        onUserLoggedIn(user);
      } else {
        // Redirigir a choose username
        onUserNotRegistered(user);
      }
      console.log(user.displayName);
    } else {
      onUserNotLoggedIn();
    }
  };

  return <div>{children}</div>;
};

export default AuthProvider;
