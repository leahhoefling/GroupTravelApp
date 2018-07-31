import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MyTrips extends Component {
    //     state = {
    //         MyTrips: []
    //     }

    //     componentDidMount() {
    //         fetch("http://localhost:5002/mytrips/{user.id}")
    //             .then(e => e.json())
    //             .then(MyTrips => this.setState({ MyTrips: MyTrips }))
    //     }

    render() {
        return (
            <React.Fragment>
                <div><h1>My Trips</h1> </div>

                {/*
                     this.state.mytrips.map(mytrip =>
                         <Employee key={employee.id} employee={employee} foo="hello">
                             {employee.name}
                        </Employee>
                    )
                 } */}
            </React.Fragment>
        )
    }
}
