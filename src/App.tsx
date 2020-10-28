import React, {useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Form from "./Pages/Form";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import NavBar from "./Components/NavBar/NavBar";
import Interviews from "../src/Pages/Interviews";
import {useDispatch} from "react-redux"
import {getUserWithStoredToken} from "./store/user/actions"

function App() {

 const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/Form" component={Form} />
        <Route path="/Signup" component={SignUp} />
        <Route path="/Login" component={Login} />
        <Route path="/Interviews" component={Interviews} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}
export default App;
