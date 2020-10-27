import React from "react";
import MainPage from "./components/MainPage/MainPage";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Posts from "./components/Posts"
import Post from "./components/Posts"

const redirect = localStorage.getItem("access-token") && localStorage.getItem("client") && localStorage.getItem("uid") ? <Redirect from="/" to="/main" /> : <Redirect from="/" to="/login" />

const App = () => {
  return (
    <>
      <Switch>
      <Route exact path="/main" component={MainPage} />
      <Route exact path="/posts/" component={Posts} />
      <Route exact path="/posts/:postID" component={Post} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/profile" component={Profile} />
      {/* <Redirect from="/" to="/login" /> */}
      {redirect}
      </Switch>
    </>
  );
};
export default withRouter(App);
