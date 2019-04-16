import React, { Component } from "react";
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
                this.setState({ suggestions: suggestions })
            })
    }


    handleClick = (rank, id, argument) => {
        const editedUpSuggestion = {
            rank: Number(rank) + 1
        };
        const editedDownSuggestion = {
            rank: Number(rank) - 1
        };
        let groupId = this.props.location.state.id;


        if (argument === "up") {
            // collectionName, itemId, theObject
            ApiManager.patchItem("suggestions", id, editedUpSuggestion)
                .then(() => {
                    //this one takes the suggestions and grabs the group id attached to them and then sorts in order of ranks
                    ApiManager.getSuggestionsForTrip("suggestions", groupId)
                        .then(suggestions => {
                            // console.log("suggestions", suggestions);
                            this.setState({ suggestions: suggestions })
                        })
                })
        } else {
            // collectionName, itemId, theObject
            ApiManager.patchItem("suggestions", id, editedDownSuggestion)
                .then(() => {
                    //this one takes the suggestions and grabs the group id attached to them and then sorts in order of ranks
                    ApiManager.getSuggestionsForTrip("suggestions", groupId)
                        .then(suggestions => {
                            this.setState({ suggestions: suggestions })
                        })
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


//thoughts:

//I found where to get the ID for the suggestion but it still isnt patching... maybe has something to do with my math
//thinking I could make an addition and subtract function to call inside the set state... kinda like the MyTripsList RemDup function setup3