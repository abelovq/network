import React from "react";
import MainPage from "./components/MainPage/MainPage";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";

const App = () => {
  return (
    <>
      <Switch>
      <Route exact path="/main" component={MainPage} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/profile" component={Profile} />
      <Redirect from="/" to="/login" />
      </Switch>
    </>
  );
};
export default withRouter(App);
