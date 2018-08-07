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
        //need to figure out how to get the group id...
        let groupId = this.props.location.state.id;



        //this one needs the group ID and then it should work
        ApiManager.getSuggestionsForTrip("suggestions", groupId)
            .then(suggestions => {
                console.log("suggestions", suggestions);
                this.setState({ suggestions: suggestions })
            })



    }


    render() {
        return (
            <React.Fragment>
                <div><h1>Group Trip Itinerary {this.props.location.state.id}</h1> </div>
                {
                    this.state.suggestions.map(suggestion =>
                        <ItineraryCards key={suggestion.id} suggestion={suggestion} />
                    )
                }
            </React.Fragment>
        )
    }
}