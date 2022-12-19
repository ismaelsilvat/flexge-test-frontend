import React from "react";
import { Routes, Route } from "react-router-dom";
import { useUserContext } from "../context/User";

import { Login, Dashboard, NewContract } from "../pages";

export default function ApplicationRoutes() {
  const { logged } = useUserContext();

  // const activeRoutes = (logged: boolean) => {
  //   return logged === true ? <LoggedRoutes /> : <IndexRoute />;
  // };

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
        <Route element={<NewContract />} path={"/contract/add"}></Route>
      </Routes>
    );
  };

  return !!logged === true ? <LoggedRoutes /> : <IndexRoute />;
}
