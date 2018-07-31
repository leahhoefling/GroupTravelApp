import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

export default class NavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/home">Majority Wins</Link>
                    </Navbar.Brand>
                    {/* To have a mobile friendly Navbar, Add a Navbar.Toggle to your Header and wrap your Navs in a Navbar.Collapse component. The Navbar will automatically wire the toggle and collapse together! */}
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <Link to="/home">Home</Link>
                        <Link to="/mytrips">My Trips</Link>
                        <Link to="/suggestion">Add New Trip Suggestion</Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}