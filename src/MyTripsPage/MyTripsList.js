import React, { Component } from "react";
import { Link } from "react-router-dom";
import MyTripsCards from "./MyTripsCards";
import ApiManager from "../API/ApiManager";
import "./MyTrips.css"

export default class MyTripsList extends Component {
    constructor() {
        super();
        this.state = {
            allCombined: {
                groups: [],
                suggestions: []
            }
        };
    }

    componentDidMount() {
        let userId = ApiManager.getIdofCurrentUser()

        Promise.all([ApiManager.getUserTrip("groups", userId), ApiManager.getUserSuggestionTrip(userId)])
            .then((responses) => {
                console.log("responses", responses);
                let myGroups = responses[0]
                console.log("mygroups", myGroups);

                let mySuggestions = this.removeDuplicates(responses[1], "groupId")
                console.log("mysug", mySuggestions);

                let myGroupIds = myGroups.map(group => group.id);
                console.log(myGroupIds);

                let filteredSuggestions = mySuggestions.filter(suggestion => !myGroupIds.includes(suggestion.group.id))
                console.log("filteredSug", filteredSuggestions);

                let allCombined = {
                    groups: myGroups,
                    suggestions: filteredSuggestions
                }
                this.setState({ allCombined: allCombined })
            })
    }
    //here's where I researched to get this code: https://ilikekillnerds.com/2016/05/removing-duplicate-objects-array-property-name-javascript/
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
                    this.state.allCombined.groups.map(mytrip =>
                        <MyTripsCards key={mytrip.id} mytrip={mytrip} />

                    )
                }

                {
                    this.state.allCombined.suggestions.map(mySugTrip =>
                        <MyTripsCards
                            key={mySugTrip.id}
                            mytrip={mySugTrip.group} />
                    )
                }
            </React.Fragment>
        )
    }
}