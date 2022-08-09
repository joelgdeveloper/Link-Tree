import { useState } from "react";
import AuthProvider from "../components/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import DashboardWrapper from "../components/DashboardWrapper";
import { v4 as uuid } from "uuid";
import { getLinks, insertNewLink } from "../firebase/firebase";

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
      setLinks([...links, newLink]);
    }
  };

  return (
    <DashboardWrapper>
      <div>
        <h1>Dashboard</h1>
        <form action="" onSubmit={handleOnSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" onChange={handleChange} />

          <label htmlFor="url">Url</label>
          <input type="text" name="url" onChange={handleChange} />

          <input type="submit" value="Create new Link" />
        </form>

        <div>
          {links.map((link) => (
            <div key={link.id}>
              <a href={link.url}>{link.title}</a>
            </div>
          ))}
        </div>
      </div>
    </DashboardWrapper>
  );
}
