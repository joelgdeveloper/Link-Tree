import { useRef, useState } from "react";
import DashboardWrapper from "../components/DashboardWrapper";
import AuthProvider from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function EditProfileView() {
  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [profileUrl, setProfileUrl] = useState(null);

  const fileRef = useRef(null);

  const navigate = useNavigate();

  const onUserLoggedIn = async (user) => {
    //si ya esta logueado guardamos la informacion del usuario
    setCurrentUser(user);
    setState(2);
  };

  const onUserNotLoggedIn = () => {
    navigate("/login");
  };

  const onUserNotRegistered = (user) => {
    navigate("/login");
  };

  const handleOpenFilePicker = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const handleChangeFile = (e) => {
    
  }

  return (
    <AuthProvider
      onUserLoggedIn={onUserLoggedIn}
      onUserNotLoggedIn={onUserNotLoggedIn}
      onUserNotRegistered={onUserNotRegistered}
    >
      <DashboardWrapper>
        <div>
          <h2>Edit Profile Info</h2>
          <div>
            <div>
              <img src={profileUrl} alt="" width={100} />
            </div>
            <div>
              <button onClick={handleOpenFilePicker}>
                Choose new profile picture
              </button>
              <input type="file" ref={fileRef} style={{ display: "none" }} onChange={handleChangeFile}/>
            </div>
          </div>
        </div>
      </DashboardWrapper>
    </AuthProvider>
  );
}
