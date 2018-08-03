import React, { Component } from "react";
import { Link } from "react-router-dom";
import MyTripsCards from "./MyTripsCards";
import ApiManager from "../API/ApiManager";
export default class MyTripsList extends Component {
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
        let tripId =

            ApiManager.getUserTrip("groups", userId)
                .then(groups => {
                    console.log("groups", groups);
                    this.setState({ groups: groups })
                })

        ApiManager.getUserSuggestionTrip(userId)
            .then(allTrips => {
                // console.log("suggestions", suggestions);
                this.setState({ suggestions: allTrips })
            })
    }

    render() {
        return (
            <React.Fragment>
                <div><h1>My Trips</h1> </div>
                {
                    this.state.groups.map(mytrip =>
                        <MyTripsCards key={mytrip.id} mytrip={mytrip} />
                        // {/* {mytrip.name} */ }
                        // </MyTripsCards>
                    )
                }
                {
                    this.state.suggestions.map(mySugTrip =>
                        <MyTripsCards key={mySugTrip.id} mytrip={mySugTrip} >
                            {mySugTrip.name}
                        </MyTripsCards>
                    )
                }
            </React.Fragment>
        )
    }
}
