import React from "react";
import { Col, Image, PageHeader, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default props => {
  return (
    <React.Fragment>
      <PageHeader>
        Welcome to Majority Wins, a group travel planning app!
      </PageHeader>
      <h2><small>Please Register or Sign-In</small>
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
      <div>
        <Col xs={6} md={4}>
          <Image id="welcomeLogo"
            src="https://s19.postimg.cc/d7kexd5tv/MAjoritywins.png"
            circle
            responsive
          />
        </Col>
      </div>
    </React.Fragment>

  );
};

