import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthProvider from "../components/AuthProvider";
import { existsUserName, updateUser } from "../firebase/firebase";

export default function ChooseUsernameView() {
  const navigate = useNavigate();
  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [username, setUserName] = useState("");

  const onUserLoggedIn = (user) => {
    navigate("/dashboard");
  };
  const onUserNotRegistered = (user) => {
    setCurrentUser(user);
    setState(3);
  };
  const onUserNotLoggedIn = () => {
    navigate("/login");
  };

  const handleInputUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleContinue = async () => {
    if (username !== "") {
      const exists = await existsUserName(username);
      if (exists) {
        setState(5);
      } else {
        const tmp = { ...currentUser };
        tmp.username = username;
        tmp.processCompleted = true;
        await updateUser(tmp);
        setState(6);
      }
    }
  };

  if (state === 3 || state === 5) {
    return (
      <div>
        <h1>Bienvenido {currentUser.displayName}</h1>
        <p>Para terminar el proceso elige un nombre de usuario</p>
        {state === 5 ? <p>El nombre de usuario ya existe, escoge otro</p> : ""}
        <div>
          <input type="text" onChange={handleInputUserName} />
        </div>

        <div>
          <button onClick={handleContinue}>Continue</button>
        </div>
      </div>
    );
  }

  if (state === 6) {
    return (
      <div>
        <h1>Felicidades!, ya puede ir al dashboard a crear tus links</h1>
        <Link to="/dashboard">Continuar</Link>
      </div>
    );
  }
  return (
    <AuthProvider
      onUserLoggedIn={onUserLoggedIn}
      onUserNotLoggedIn={onUserNotLoggedIn}
      onUserNotRegistered={onUserNotRegistered}
    ></AuthProvider>
  );
}
