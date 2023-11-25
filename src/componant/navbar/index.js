import React from "react";
import "./index.css";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <div className="backr">
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "gold" : "white",
              textDecoration: "none",
              padding: isActive ? "2px" : "",
              fontSize: isActive ? "20px" : "",
            };
          }}
        >
          BOOKS
        </NavLink>
        <NavLink
          to="/author"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "gold" : "white",
              textDecoration: "none",
              padding: isActive ? "2px" : "",
              fontSize: isActive ? "20px" : "",
            };
          }}
        >
          AUTHOR
        </NavLink>
        <NavLink
          to="/shalve"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "gold" : "white",
              textDecoration: "none",
              padding: isActive ? "2px" : "",
              fontSize: isActive ? "20px" : "",
            };
          }}
        >
          SHALVE
        </NavLink>
      </div>
    </>
  );
};
export default Nav;
