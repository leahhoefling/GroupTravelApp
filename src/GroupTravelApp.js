import ApplicationViews from "./ApplicationViews";
import React, { Component } from "react";
import NavBar from "./NavBar";


export default class GroupTravelApp extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ApplicationViews />
      </React.Fragment>
    );
  }
}
