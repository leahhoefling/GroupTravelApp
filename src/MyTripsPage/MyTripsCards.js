import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types"
import { Button, Panel } from "react-bootstrap";
import ApiManager from "../API/ApiManager";
import { Component } from "react";
import "./MyTrips.css"


export default class MyTripsCards extends Component {

    //on click, send user to Api call: "getSuggestionsForTrip" link with that specific group id


    render() {
        return (
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">{this.props.mytrip.name}</h3>
                </div>
                <div class="panel-body">

                    <h5 className="card-title">Start Date of Trip:</h5>
                    <p className="card-text">{this.props.mytrip.startDate}</p>
                    <h5 className="card-title">End Date of Trip:</h5>
                    <p className="card-text">{this.props.mytrip.endDate}</p>

                    <p>
                        <Button bsStyle="primary">
                            <Link to={{
                                pathname: "/itinerary",
                                state: this.props.mytrip
                            }}>
                                Vote and View Itinerary
                                </ Link>
                        </Button>
                    </p>
                </div>
            </div >
        )

    }
}