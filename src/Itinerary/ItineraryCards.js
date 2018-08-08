import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import { Jumbotron, Button } from "react-bootstrap";
import ApiManager from "../API/ApiManager";
import { Component } from "react";
import "./Itinerary.css"



export default class ItineraryCards extends Component {

    render() {
        // console.log("props", this.props);

        return (
            <div id={this.props.suggestion.groupId} className="card" style={{ width: `75rem` }}>
                <div className="card-body">
                    <h3 className="card-title">{this.props.suggestion.name}</h3>
                    <h5 className="card-title">Cost of Suggestion:</h5>
                    <p className="card-text">{this.props.suggestion.cost}</p>
                    <h5 className="card-title">Description</h5>
                    <p className="card-text">{this.props.suggestion.description}</p>
                    <h5 className="card-title">Link to Suggestion:</h5>
                    <a href className="card-link">{this.props.suggestion.link}</a>
                    <h5 className="card-title">Points:</h5>
                    <p className="card-text">{this.props.suggestion.rank}</p>
                    <p>
                        <Button bsStyle="primary" onClick={() => this.props.handleClick(this.props.suggestion.rank, this.props.suggestion.id, "up")}>UPVOTE</Button>
                    </p>
                    <p>
                        <Button bsStyle="danger" onClick={() => this.props.handleClick(this.props.suggestion.rank, this.props.suggestion.id, "down")}>DOWN-VOTE</Button>
                    </p>
                </div>
            </div >
        )

    }
}
