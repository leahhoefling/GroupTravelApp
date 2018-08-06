import React, { Component } from "react";
import { Link } from "react-router-dom";
import ItineraryCards from "./ItineraryCards";
import ApiManager from "../API/ApiManager";
export default class ItineraryList extends Component {
    constructor() {
        super();
        this.state = {
            groups: [],
            suggestions: []
        };
    }

    componentDidMount() {
        let userId = ApiManager.getIdofCurrentUser()
        // console.log("user", userId);

        ApiManager.getSuggestionsForTrip("suggestions", 9)
            .then(suggestions => {
                console.log("suggestions", suggestions);
                this.setState({ suggestions: suggestions })
            })

        // this is the previous call i was making that was giving me duplicates of suggestions
        // ApiManager.getUserSuggestionTrip(userId)
        //     .then(allTrips => {
        //         console.log(allTrips);

        //         this.setState({ suggestions: allTrips })
        //     })

    }


    render() {
        return (
            <React.Fragment>
                <div><h1>Group Trip Itinerary</h1> </div>
                {
                    this.state.suggestions.map(suggestion =>
                        <ItineraryCards key={suggestion.id} suggestion={suggestion} />
                        // {/* {mytrip.name} */ }
                        // </MyTripsCards>
                    )
                }

                {/* {
                    this.state.suggestions.map(mySugTrip =>
                        <ItineraryCards
                            key={mySugTrip.id}
                            mytrip={mySugTrip.group} />
                    )
                } */}
            </React.Fragment>
        )
    }
}