import React from "react";
import { Image, Col } from "react-bootstrap";


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
        </React.Fragment>
    )
};