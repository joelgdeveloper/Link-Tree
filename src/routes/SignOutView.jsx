import { useNavigate } from "react-router-dom";
import AuthProvider from "../components/AuthProvider";
import { logout } from "../firebase/firebase";

export default function SignOutView() {
  const navigate = useNavigate();

  const onUserLoggedIn = async (user) => {
    await logout();
  };

  const onUserNotLoggedIn = () => {
    navigate("/login", { replace: true });
    // window.location.reload();
  };

  const onUserNotRegistered = (user) => {
    navigate("/login", { replace: true });
    // window.location.reload();
  };
  return (
    <AuthProvider
      onUserLoggedIn={onUserLoggedIn}
      onUserNotLoggedIn={onUserNotLoggedIn}
      onUserNotRegistered={onUserNotRegistered}
    ></AuthProvider>
  );
}
