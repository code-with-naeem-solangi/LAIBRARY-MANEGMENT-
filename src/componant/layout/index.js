import React from "react";
import Head from "../header/index.js";
import Nav from "../navbar/index.js";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../login/index.js";


const Layout = () => {
  const user = useSelector((e) => e.user);
  return (
    <div>
      <Head />
      <div>
        
        {
      user ? <Nav/>  : null  }
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
