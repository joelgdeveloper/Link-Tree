import React from "react";
import style from "./css/publicLink.module.css";


const PublicLink = ({ url, title }) => {
  return (
    <a
      href={`https://${url}`}
      className={style.publicLinkContainer}
      target="_blank"
    >
      <div>{title}</div>
    </a>
  );
};

export default PublicLink;
