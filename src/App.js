import React from "react";
import MainPage from "./components/MainPage";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <>
      <Switch>
      <Route exact path="/main" component={MainPage} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/signup" component={SignUp} />
      <Redirect from="/" to="/main" />
      </Switch>
    </>
  );
};
export default withRouter(App);
