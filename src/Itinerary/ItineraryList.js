import React, { Component } from "react";
import { Link } from "react-router-dom";
import ItineraryCards from "./ItineraryCards";
import ApiManager from "../API/ApiManager";
import "./Itinerary.css"

export default class ItineraryList extends Component {
    constructor() {
        super();
        this.state = {
            groups: [],
            suggestions: []
        };
    }

    componentDidMount() {
        //the group id...
        let groupId = this.props.location.state.id;

        //this one takes the suggestions and grabs the group id attached to them and then sorts in order of ranks
        ApiManager.getSuggestionsForTrip("suggestions", groupId)
            .then(suggestions => {
                console.log("suggestions", suggestions);
                this.setState({ suggestions: suggestions })
            })
    }


    handleClick = (argument) => {
        const editedSuggestion = {
            rank: this.state.rank
        };
        if (argument === "up") {
            // collectionName, itemId, theObject
            ApiManager.patchItem("suggestions", this.state.suggestions.id, editedSuggestion).then(() => {
                this.setState(({ rank }) => ({
                    rank: rank + 1
                }));
            })
        } else {
            // collectionName, itemId, theObject
            ApiManager.patchItem("suggestions", this.state.suggestions.id, editedSuggestion).then(() => {
                this.setState(({ rank }) => ({
                    rank: rank - 1
                }));
            })
        }

    }

    render() {
        return (
            <React.Fragment>
                <div><h2 id="itineraryTitle">{this.props.location.state.name} Itinerary</h2> </div>
                {
                    this.state.suggestions.map(suggestion =>
                        <ItineraryCards key={suggestion.id} suggestion={suggestion} handleClick={this.handleClick} />
                    )
                }
            </React.Fragment>
        )
    }
}