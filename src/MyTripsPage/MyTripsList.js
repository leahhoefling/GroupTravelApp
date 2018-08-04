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

        ApiManager.getUserTrip("groups", userId)
            .then(groups => {
                console.log("groups", groups);
                this.setState({ groups: groups })
            })

        // this is the previous call i was making that was giving me duplicates of suggestions
        // ApiManager.getUserSuggestionTrip(userId)
        //     .then(allTrips => {
        //         console.log(allTrips);

        //         this.setState({ suggestions: allTrips })
        //     })

        ApiManager.getUserSuggestionTrip(userId)
            .then(allTrips => {
                let remDup = this.removeDuplicates(allTrips, "groupId")
                // console.log("suggestions", suggestions);
                this.setState({ suggestions: remDup })
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
//1) im getting the error "Unhandled Rejection (SyntaxError): Unexpected token T in JSON at position 0" on the API function
//2) I just realized my duplicates function doesnt work for checking between the groups array and the suggestions groups array