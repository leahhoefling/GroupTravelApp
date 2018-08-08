import React, { Component } from "react";
import { Link } from "react-router-dom";
import MyTripsCards from "./MyTripsCards";
import ApiManager from "../API/ApiManager";
import "./MyTrips.css"

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

        ApiManager.getUserTrip("groups", userId)
            .then(groups => {
                console.log("groups", groups);
                this.setState({ groups: groups })
            }).then((suggestions) => {

                ApiManager.getUserSuggestionTrip(userId)
                    .then(allTrips => {
                        allTrips.forEach(trip => {
                            console.log("trip", trip);

                            if (trip.userId !== userId) {
                                // console.log("alltrips", allTrips.userId);
                                console.log("userId", userId);

                                let remDup = this.removeDuplicates(allTrips, "groupId")
                                console.log("all trips", allTrips);

                                // console.log("suggestions", suggestions);
                                this.setState({ suggestions: remDup })
                            }
                        })

                    })

            })



    }
    //here's where I got this code: https://ilikekillnerds.com/2016/05/removing-duplicate-objects-array-property-name-javascript/
    removeDuplicates = (myArr, prop) => {
        return myArr.filter((obj, pos, arr) => {
            return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
        });
    }

    render() {
        return (
            <React.Fragment>
                <div id="header"><h1>My Trips</h1></div>
                {
                    this.state.groups.map(mytrip =>
                        <MyTripsCards key={mytrip.id} mytrip={mytrip} />
                        // {/* {mytrip.name} */ }
                        // </MyTripsCards>
                    )
                }

                {
                    this.state.suggestions.map(mySugTrip =>
                        <MyTripsCards
                            key={mySugTrip.id}
                            mytrip={mySugTrip.group} />
                    )
                }
            </React.Fragment>
        )
    }
}



//heres some thoughts of where I left off:
//1) I just realized my duplicates function doesnt work for checking between the groups array and the suggestions groups array