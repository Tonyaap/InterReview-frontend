import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Form from "./Pages/Form";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import NavBar from "./Components/NavBar/NavBar";
import Interviews from "../src/Pages/Interviews";
import { useDispatch } from "react-redux";
import { getUserWithStoredToken } from "./store/user/actions";
import GraphPage from "./Pages/GraphPage";
import HomePage from "./Pages/HomePage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("does this useeffet work?");

    dispatch(getUserWithStoredToken());
    console.log("does this dispatch");
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/Form" component={Form} />
        <Route path="/Signup" component={SignUp} />
        <Route path="/Login" component={Login} />
        <Route path="/Interviews" component={Interviews} />
        <Route path="/Graph" component={GraphPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}
export default App;
