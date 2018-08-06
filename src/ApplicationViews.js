import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./LoginPage/Login";
import WelcomePage from "./LoginPage/WelcomePage";
import ApiManager from "./API/ApiManager";
import Register from "./LoginPage/Register";
import Home from "./Home/HomeDashboard";
import SuggestionForm from "./SuggestionForm/SuggestionForm";
import MyTrips from "./MyTripsPage/MyTripsList";
import ItineraryList from "./Itinerary/ItineraryList";
import AddGroupTrip from "./AddTripGroup/AddGroupForm";




export default class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/suggestion" component={SuggestionForm} />
        <Route exact path="/mytrips" component={MyTrips} />
        <Route exact path="/itinerary" component={ItineraryList} />
        <Route exact path="/addgroup" component={AddGroupTrip} />

      </React.Fragment>
    );
  }
}
