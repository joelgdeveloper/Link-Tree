import { useState } from "react";
import AuthProvider from "../components/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import DashboardWrapper from "../components/DashboardWrapper";
import { v4 as uuid } from "uuid";
import { deleteLink, getLinks, insertNewLink, updateLink } from "../firebase/firebase";
import LinkTree from "../components/LinkTree";

import style from "./css/dashboardView.module.css";
import styleLinks from "../components/css/linkTree.module.css";

export default function DashboardView() {
  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [inputs, setInputs] = useState({});
  const [links, setLinks] = useState([]);

  const navigate = useNavigate();

  const onUserLoggedIn = async (user) => {
    //si ya esta logueado guardamos la informacion del usuario
    setCurrentUser(user);
    setState(2);
    const resLinks = await getLinks(user.uid);
    setLinks([...resLinks]);
  };

  const onUserNotRegistered = (user) => {
    navigate("/login");
  };
  const onUserNotLoggedIn = () => {
    navigate("/login");
  };

  if (state === 0) {
    return (
      <AuthProvider
        onUserLoggedIn={onUserLoggedIn}
        onUserNotLoggedIn={onUserNotLoggedIn}
        onUserNotRegistered={onUserNotRegistered}
      >
        Loading...
      </AuthProvider>
    );
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addLink();
  };

  const addLink = () => {
    if (inputs.title !== "" && inputs.url !== "") {
      const newLink = {
        id: uuid(),
        title: inputs.title,
        url: inputs.url,
        uid: currentUser.uid,
      };

      const res = insertNewLink(newLink);
      newLink.docId = res.id;

      setInputs({});
      setLinks([newLink,...links ]);
    }
  };
  const handleDeleteLink = async(docId) => {
    await deleteLink(docId);
    const tmp = links.filter(link => link.docId !== docId); //tmp sera un arreglo con todos los elementos, excepto el que quiero eliminar
    setLinks([...tmp]);
  };
  const handleUpdateLink = async(docId, title, url) => {
    const link = links.find(item => item.docId === docId);
    link.title = title;
    link.url = url;
    await updateLink(docId, link);
  };

  return (
    <DashboardWrapper>
      <div>
        <h1>Dashboard</h1>
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
        <form className={style.entryContainer} action="" onSubmit={handleOnSubmit}>
          <span className={style.generateLink}>Generate Links</span>
          <label htmlFor="title">Title</label>
          <input className="inputLarge" type="text" value={inputs.title ? inputs.title : "" } name="title" onChange={handleChange} />

          <label htmlFor="url">Url</label>
          <input className="inputLarge" type="text" value={inputs.url ? inputs.url : "" } name="url" onChange={handleChange} />

          <input className="btn" type="submit" value="Create new Link" />
        </form>

        <div className={styleLinks.linksContainer}>
          {links.map((link) => (
            <LinkTree
              key={link.id}
              docId={link.docId}
              title={link.title}
              url={link.url}
              onDelete={handleDeleteLink}
              onUpdate={handleUpdateLink}
            ></LinkTree>
          ))}
        </div>
      </div>
    </DashboardWrapper>
  );
}
