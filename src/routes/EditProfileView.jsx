import { useRef, useState } from "react";
import DashboardWrapper from "../components/DashboardWrapper";
import AuthProvider from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";
import { getProfilePhotoUrl, setUserProfilePhoto, updateUser } from "../firebase/firebase";

import style from "./css/editProfileView.module.css";


export default function EditProfileView() {
  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [profileUrl, setProfileUrl] = useState(null);

  const fileRef = useRef(null);

  const navigate = useNavigate();

  const onUserLoggedIn = async (user) => {
    //si ya esta logueado guardamos la informacion del usuario
    setCurrentUser(user);
    const url = await getProfilePhotoUrl(user.profilePicture);
    setProfileUrl(url);
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
    const files = e.target.files;

    const fileReader = new FileReader();

    if (fileReader && files && files.length > 0) {
      fileReader.readAsArrayBuffer(files[0]); //convierte el archivo en un blop
      fileReader.onload = async function () {
        //cuando pueda transformar o leer ese documento, como un arreglo de bytes
        const imageData = fileReader.result; //image data ya tiene la imagen codificada
        const res = await setUserProfilePhoto(currentUser.uid, imageData);

        if (res) {
          const tmpUser = { ...currentUser };
          tmpUser.profilePicture = res.metadata.fullPath;
          await updateUser(tmpUser);
          setCurrentUser({ ...tmpUser });
          const url = await getProfilePhotoUrl(currentUser.profilePicture);
          setProfileUrl(url);
          window.location.reload();
        }
      };
    }
  };

  if (state !== 2) {
    return (
      <AuthProvider
        onUserLoggedIn={onUserLoggedIn}
        onUserNotLoggedIn={onUserNotLoggedIn}
        onUserNotRegistered={onUserNotRegistered}
      ></AuthProvider>
    );
  }

  return (
    <DashboardWrapper>
      <div className="containerEditProfile">
        <h2>Edit Profile Info</h2>
        <div className={style.profilePictureContainer}>
          <div>
            <img src={profileUrl} alt="" width={100} />
          </div>
          <div>
            <button className="btn-picture" onClick={handleOpenFilePicker}>
              Choose new profile picture
            </button>
            <input
              className={style.fileInput}
              type="file"
              ref={fileRef}
              onChange={handleChangeFile}
            />
          </div>
        </div>
      </div>
      <span className="viewUrl">
        My Url:
        {
          (window.location.hostname.includes('localhost'))
            ? <a href={`http://${window.location.hostname}:${window.location.port}/u/${currentUser.username}`}
              target="_blank"
            >
              {`   ${window.location.hostname}:${window.location.port}/u/${currentUser.username}`}
            </a> :
            console.log('chau')
        }
      </span>
    </DashboardWrapper>
  );
}
