import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { auth } from "../../firebase";
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./SignUpPage/SignupPage";

const Authpage = () => {
  // useEffect(() => {
  //   const unsub = auth.onAuthStateChanged((user) => setUser(user));

  //   console.log("UID ", user.uid);
  //   // it will run when component unmounts like componentDidUnmount()
  //   return () => {
  //     unsub();
  //   };
  // });

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignupPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Authpage;
