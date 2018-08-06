import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import { Jumbotron, Button } from "react-bootstrap";
import ApiManager from "../API/ApiManager";
import { Component } from "react";
import "./Itinerary.css"


export default class ItineraryCards extends Component {

    render() {
        return (
            <div className="card" style={{ width: `75rem` }}>
                <div className="card-body">
                    <h2 className="card-title">{this.props.suggestion.name}</h2>
                    <h5 className="card-title">Cost of Suggestion:</h5>
                    <p className="card-text">{this.props.suggestion.cost}</p>
                    <h5 className="card-title">Description</h5>
                    <p className="card-text">{this.props.suggestion.description}</p>
                    <h5 className="card-title">Link to Suggestion</h5>
                    <p className="card-text">{this.props.suggestion.link}</p>
                    <p>
                        <Button bsStyle="primary">UPVOTE</Button>
                    </p>
                    <p>
                        <Button bsStyle="danger">UPVOTE</Button>
                    </p>
                </div>
            </div >
        )

    }
}