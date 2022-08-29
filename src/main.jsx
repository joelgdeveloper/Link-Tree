import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginView from "./routes/LoginView";
import DashboardView from "./routes/DashboardView";
import EditProfileView from "./routes/EditProfileView";
import SignOutView from "./routes/SignOutView";
import PublicProfileView from "./routes/PublicProfileView";
import ChooseUsernameView from "./routes/ChooseUsernameView";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginView />} />
      <Route exact path="/login" element={<LoginView />} />
      <Route exact path="/dashboard" element={<DashboardView />} />
      <Route exact path="/dashboard/profile" element={<EditProfileView />} />
      <Route exact path="/signout" element={<SignOutView />} />
      <Route exact path="/u/:username" element={<PublicProfileView />} />
      <Route exact path="/choose-username" element={<ChooseUsernameView />} />
    </Routes>
  </BrowserRouter>
);
