import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import { Jumbotron, Button } from "react-bootstrap";
import ApiManager from "../API/ApiManager";
import { Component } from "react";


export default class MyTripsCards extends Component {

    render() {
        return (
            < div >
                <Jumbotron>
                    <h1>{this.props.mytrip.name}</h1>
                    <p>{this.props.mytrip.startDate}</p>
                    <p>{this.props.mytrip.endDate}</p>

                    <p>
                        <Button bsStyle="primary">Vote and View Itinerary</Button>
                    </p>
                </Jumbotron>
            </div >
        )

    }
}