import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import PublicLink from "../components/PublicLink";
import {
  existsUserName,
  getProfilePhotoUrl,
  getUserPublicProfileInfo,
} from "../firebase/firebase";

import style from "./css/publicProfileView.module.css";
import styleLinks from "../components/css/publicLink.module.css";

export default function PublicProfileView() {
  const params = useParams();
  const [profile, setProfile] = useState(null);
  const [url, setUrl] = useState("");
  const [state, setState] = useState(0);

  useEffect(() => {
    getProfile();

    async function getProfile() {
      const username = params.username;
      try {
        const userUid = await existsUserName(username); //si existe me regresa el uid, si no regresa null

        if (userUid) {
          const userInfo = await getUserPublicProfileInfo(userUid);
          setProfile(userInfo);

          const url = await getProfilePhotoUrl(
            userInfo.profileInfo.profilePicture
          );
          setUrl(url);
        } else {
          setState(7);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [params]);

  if (state === 7) {
    return (
      <div>
        <h1>Username doesn't exist </h1>
      </div>
    );
  }

  return (
    <div className={style.profileContainer}>
      <div className={style.profilePicture}>
        <img src={url} alt="User's picture" />
      </div>
      <h2>{profile?.profileInfo.username}</h2>
      <h3>{profile?.profileInfo.displayName}</h3>
      <div className={styleLinks.publicLinksContainer}>
        {profile?.linksInfo.map((link) => (
          <PublicLink key={link.docId} url={link.url} title={link.title} />
        ))}
      </div>
    </div>
  );
}
