import React from "react";
import MainPage from "./components/MainPage/MainPage";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile/Profile";
import PostsInMain from "./components/MainPage/PostsInMain";
// import PostID from "./components/Posts/PostID";
// import Post from "./components/Posts";

const redirect =
  localStorage.getItem("access-token") &&
  localStorage.getItem("client") &&
  localStorage.getItem("uid") ? (
    <Redirect to="/main" />
  ) : (
    <Redirect to="/login" />
  );

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/posts/" component={PostsInMain} />
        <Route exact path="/posts/:postID" component={PostsInMain} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/profile" component={Profile} />
        {redirect}
      </Switch>
    </>
  );
};
export default withRouter(App);
