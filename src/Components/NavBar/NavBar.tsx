import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import {logOut} from "../../store/user/actions"
import {selectToken} from "../../store/user/selectors"



export default function NavBar() {

  const dispatch = useDispatch();
  const token = useSelector(selectToken)

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

    
        { !token ?      <li>
          <NavLink style={{ color: "white" }} to="/Login">
            Login
          </NavLink>
        </li>  :   <li> 
          <button onClick={() => dispatch(logOut())}> logout </button>
           </li>  }
        <li>
          <NavLink style={{ color: "white" }} to="/SignUp">
            Sign up
          </NavLink>
        </li>
   
        
      </ul>
    </div>
  );
}
