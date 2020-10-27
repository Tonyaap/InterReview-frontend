import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="topnav">
      <ul className="topnav">
        <li>
          <NavLink style={{ color: "white" }} to="/Home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={{ color: "white" }} to="/Interviews">
            Interview
          </NavLink>
        </li>
        <li>
          <NavLink style={{ color: "white" }} to="/Form">
            Reflect
          </NavLink>
        </li>
        <li>
          <NavLink style={{ color: "white" }} to="/SignUp">
            Sing up
          </NavLink>
        </li>
        <li>
          <NavLink style={{ color: "white" }} to="/Login">
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
