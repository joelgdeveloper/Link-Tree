import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import {
  auth,
  getUserInfo,
  registerNewUser,
  userExist,
} from "../firebase/firebase";

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
    console.log(user);
    if (user) {
      const isRegistered = await userExist(user.uid); //todas las funciones en firebase son asincronas, siempre tenemos que esperar por ellas

      if (isRegistered) {
        const userInfo = await getUserInfo(user.uid);
        console.log(userInfo);
        if (userInfo.processCompleted) {
          // Redirigir a dashboard
          onUserLoggedIn(userInfo);
        }else {
          onUserNotRegistered(userInfo);
        }

      } else {
        // Redirigir a choose username
        await registerNewUser({
          uid: user.uid,
          displayName: user.displayName,
          profilePicture: "",
          username: "",
          processCompleted: false,
        });
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
