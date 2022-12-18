import React from "react";
import { Routes, Route } from "react-router-dom";
import { useUserContext } from "../context/User";

import { Login, Dashboard } from "../pages";

export default function ApplicationRoutes() {
  const { logged } = useUserContext();

  const IndexRoute = () => {
    return (
      <Routes>
        <Route element={<Login />} path={"/"} />
      </Routes>
    );
  };

  const LoggedRoutes = () => {
    return (
      <Routes>
        <Route element={<Dashboard />} path={"/"} />
        <Route element={<Login />} path={"/login"} />
      </Routes>
    );
  };
  return <>{logged === true ? <LoggedRoutes /> : <IndexRoute />}</>;
}
