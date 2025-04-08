import React from "react";
import Admin from "../components/pages/admin/Admin";
import Register from "../components/pages/authorization/Register";
import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
  const routes = [
    { link: "/admin", element: <Admin /> },
    { link: "/register", element: <Register /> },
    { link: "/about", element: <Register /> },
    { link: "/products", element: <Register /> },

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
