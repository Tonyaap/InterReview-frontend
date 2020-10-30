import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { logOut } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import Logo from "../../logo/logo.png"
import Button from "@material-ui/core/Button";

export default function NavBar() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  return (
    <div className="topnav">
      <ul className="topnav">
          <img className="homelogo" src={Logo} alt="logo" />
        <li>
          <NavLink style={{ color: "white" }} to="/Home">
            Home
          </NavLink>
        </li>

        {!token ? (
          <div>
            <li>
              <NavLink style={{ color: "white" }} to="/Login">
                Login
              </NavLink>
            </li>{" "}
            <li>
              <NavLink style={{ color: "white" }} to="/SignUp">
                Sign up
              </NavLink>
            </li>
          </div>
        ) : (
          <div>
            <li>
              <NavLink style={{ color: "white" }} to="/Graph">
                Graph
              </NavLink>
            </li>
            <li>
              <NavLink style={{ color: "white" }} to="/Form">
                Reflect
              </NavLink>
            </li>{" "}
            <li>
              <NavLink style={{ color: "white" }} to="/Interviews">
                Interview
              </NavLink>
            </li>
            <li style={{float: "right", marginRight: "50px" }}>
              <Button onClick={() => dispatch(logOut())} color="secondary"
              variant="contained" fullWidth 
              > logout </Button>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
}
