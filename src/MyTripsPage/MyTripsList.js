import React, { Component } from "react";
import { Link } from "react-router-dom";
import MyTripsCards from "./MyTripsCards";
import ApiManager from "../API/ApiManager";
export default class MyTripsList extends Component {
    constructor() {
        super();
        this.state = {
            groups: [],
        };
    }

    componentDidMount() {
        let userId = ApiManager.getIdofCurrentUser()
        console.log("user", userId);

        ApiManager.getUserTrip("groups", userId)
            .then(groups => {
                console.log("groups", groups);

                this.setState({ groups: groups })
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
            </React.Fragment>
        )
    }
}
