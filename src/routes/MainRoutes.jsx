import React from "react";
import Admin from "../components/pages/admin/Admin";
import { Route, Routes } from "react-router-dom";
import Register from "../components/pages/register/Register";
import Login from "../components/pages/login/Login";

const MainRoutes = () => {
  const routes = [
    { link: "/admin", element: <Admin /> },
    { link: "/register", element: <Register /> },
    { link: "/about", element: <Register /> },
    { link: "/products", element: <Register /> },
    { link: "/login", element: <Login /> },
  ];
  return (
    <Routes>
      {routes.map((el, idx) => (
        <Route path={el.link} element={el.element} key={idx} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
