import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav, Image } from 'react-bootstrap';
import "./NavBar.css"
import auth0Client from '../Auth';


class NavBar extends Component {
    signOut = () => {
        auth0Client.signOut();
        this.props.history.replace('/');
    };
    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>

                        <Link to="/home">

                            Majority Wins
                        </Link>
                    </Navbar.Brand>
                    {/* To have a mobile friendly Navbar, Add a Navbar.Toggle to your Header and wrap your Navs in a Navbar.Collapse component. The Navbar will automatically wire the toggle and collapse together! */}

                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav id="navLinks">
                        <Link to="/home">Home</Link>
                        <Link to="/mytrips">My Trips</Link>
                        <Link to="/suggestion">Add New Trip Suggestion</Link>
                        {/* Auth0 code for checking to see if user is logged in. If they are, display profile name and sign out button. If they are not, display sign in button. */}
                        {
                            !auth0Client.isAuthenticated() &&
                            <button className="btn btn-dark" onClick={auth0Client.signIn}>Sign In</button>
                        }
                        {
                            auth0Client.isAuthenticated() &&
                            <div>
                                <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
                                <button className="btn btn-dark" onClick={() => { this.signOut() }}>Sign Out</button>
                            </div>
                        }
                    </Nav>
                </Navbar.Collapse >

            </Navbar >
        )
    }
}
export default withRouter(NavBar)