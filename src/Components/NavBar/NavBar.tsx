import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import {logOut} from "../../store/user/actions"

export default function NavBar() {

  const dispatch = useDispatch();

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
          <li> 
          <button onClick={() => dispatch(logOut())}> logout </button>
           </li>
      </ul>
    </div>
  );
}
