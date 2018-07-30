import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./LoginPage/Login";

export default class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Login} />
      </React.Fragment>
    );
  }
}
