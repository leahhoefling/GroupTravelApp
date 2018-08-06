import React from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types"
import { Button } from "react-bootstrap";
import ApiManager from "../API/ApiManager";
import { Component } from "react";
import "./MyTripsCards.css"


export default class MyTripsCards extends Component {

    render() {
        return (
            <div className="card" style={{ width: `75rem` }}>
                <div className="card-body">
                    <h2 className="card-title">{this.props.mytrip.name}</h2>
                    <h5 className="card-title">Start Date of Trip:</h5>
                    <p className="card-text">{this.props.mytrip.startDate}</p>
                    <h5 className="card-title">End Date of Trip:</h5>
                    <p className="card-text">{this.props.mytrip.endDate}</p>

                    <p>
                        <Button bsStyle="primary">Vote and View Itinerary</Button>
                    </p>
                </div>
            </div >
        )

    }
}