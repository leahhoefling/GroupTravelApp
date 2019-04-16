import React, { Component } from "react";
import Login from "./LoginPage/Login";
import WelcomePage from "./LoginPage/WelcomePage";
//import ApiManager from "./API/ApiManager";
import Register from "./LoginPage/Register";
import Home from "./Home/HomeDashboard";
import SuggestionForm from "./SuggestionForm/SuggestionForm";
import MyTrips from "./MyTripsPage/MyTripsList";
import ItineraryList from "./Itinerary/ItineraryList";
import AddGroupTrip from "./AddTripGroup/AddGroupForm";
import Callback from "./Callback"
import auth0Client from './Auth';
import { Route } from "react-router-dom";





export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>

        <Route
          exact
          path="/"
          render={props => {
            if (auth0Client.isAuthenticated()) {
              return (< WelcomePage />)
            }
            else {
              auth0Client.signIn();
              return <div></div>;
            }
          }} />
        <Route exact path="/login" render={props => {
          if (auth0Client.isAuthenticated()) { return (< Login />) }
          else {
            auth0Client.signIn();
            return <div></div>;
          }
        }} />
        <Route exact path="/register" render={props => {
          if (auth0Client.isAuthenticated()) { return (< Register />) } else {
            auth0Client.signIn();
            return <div></div>;
          }
        }} />
        <Route exact path="/home" render={props => {
          if (auth0Client.isAuthenticated()) { return (< Home />) } else {
            auth0Client.signIn();
            return <div></div>;
          }
        }} />
        <Route exact path="/suggestion" render={props => {
          if (auth0Client.isAuthenticated()) { return (< SuggestionForm />) } else {
            auth0Client.signIn();
            return <div></div>;
          }
        }} />
        <Route exact path="/mytrips" render={props => {
          if (auth0Client.isAuthenticated()) { return (< MyTrips />) } else {
            auth0Client.signIn();
            return <div></div>;
          }
        }} />
        <Route exact path="/itinerary" render={props => {
          if (auth0Client.isAuthenticated()) { return (< ItineraryList />) } else {
            auth0Client.signIn();
            return <div></div>;
          }
        }} />
        <Route exact path="/addgroup" render={props => {
          if (auth0Client.isAuthenticated()) { return (< AddGroupTrip />) } else {
            auth0Client.signIn();
            return <div></div>;
          }
        }} />
        {/* <!-- ... NavBar and the other two Routes ... --> */}
        <Route exact path='/callback' component={Callback} />

      </React.Fragment>
    );
  }
}
