import React from "react";
import { PageHeader, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default props => {
  return (
    <React.Fragment>
      <PageHeader class="welcomeHeader">
        Welcome to Majority Wins, a group travel planning app!
      </PageHeader>
      <h2><small>Let's Get Started!</small>
      </h2>
      <div id="welcomeButtons">
        <Button id="loginWelcome" >
          <Link
            to={{
              pathname: "/login"
            }}
          >
            Sign-In
          </Link>
        </Button>
        <Button id="registerWelcome">
          <Link
            to={{
              pathname: "/register"
            }}
          >
            Register
            </Link>
        </Button>
      </div>
    </React.Fragment>

  );
};

