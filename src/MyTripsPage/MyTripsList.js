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
            suggestions: [],
            allTrips: []
        };
    }

    componentDidMount() {
        let userId = ApiManager.getIdofCurrentUser()

        //do a return on the promise. all then return the arrays-- or an obj that groups is array
        Promise.all([ApiManager.getUserTrip("groups", userId), ApiManager.getUserSuggestionTrip(userId)])
            .then((responses) => {
                console.log(responses);
                let myGroups = responses[0]
                let mySuggestions = this.removeDuplicates(responses[1], "groupId")
                console.log(mySuggestions);

                let myGroupIds = myGroups.map(group => group.id);
                console.log(myGroupIds);

                let filteredSuggestions = mySuggestions.filter(suggestion => !myGroupIds.includes(suggestion.group.id))
                console.log(filteredSuggestions);

            })
    }
    //here's where I got this code: https://ilikekillnerds.com/2016/05/removing-duplicate-objects-array-property-name-javascript/
    removeDuplicates = (myArr, prop) => {
        return myArr.filter((obj, pos, arr) => {
            return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
        });
    }
    //this code wasnt working so refactored to above code with the promise.all
    // ApiManager.getUserTrip("groups", userId)
    //     .then(groups => {
    //         console.log("groups", groups);
    //         this.setState({ groups: groups })
    //     })
    //     .then((suggestions => {
    //         console.log("suggestions after .then", suggestions);// suggestions is undefined
    //         ApiManager.getUserSuggestionTrip(userId)
    //             .then(allTrips => {
    //                 allTrips.forEach(trip => {
    //                     // console.log("trip", trip);

    //                     if (trip.userId !== userId) {
    //                         // console.log("alltrips user id", allTrips.userId);
    //                         console.log("userId", userId);

    //                         let remDup = this.removeDuplicates(allTrips, "groupId")
    //                         // console.log("all trips", allTrips);

    //                         console.log("suggestions in foreach", suggestions);//console not getting to this
    //                         this.setState({ suggestions: remDup })
    //                     }
    //                 })

    //             })

    //     }))


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