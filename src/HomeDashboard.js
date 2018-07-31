import React from "react";
import { Image, Col, Button } from "react-bootstrap";


export default props => {
    return (
        <React.Fragment>
            <div>
                <Col xs={6} md={4}>
                    <Image id="welcomeLogo"
                        src="https://s19.postimg.cc/d7kexd5tv/MAjoritywins.png"
                        circle
                        responsive
                    />
                </Col>
            </div>
            <h1>
                Welcome to the Home Page!
        </h1>
            <div id=
                "CTA">
                <h3>Where is your group off to?</h3>
                <Button bsSize="large">Start New Group Trip</Button>
            </div>
        </React.Fragment>
    )
};