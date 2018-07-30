import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./LoginPage/Login";
import WelcomePage from "./WelcomePage";
import ApiManager from "./API/ApiManager";
import Register from "./LoginPage/Register";
import Home from "./HomeDashboard";


export default class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
      </React.Fragment>
    );
  }
}
