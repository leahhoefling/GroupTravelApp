import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Image, Col, Button } from "react-bootstrap";
import SuggestionForm from "../SuggestionForm/SuggestionForm";



export default props => {
    return (
        <React.Fragment>
            <div>
                <div>
                    {/* <Col md={6} offset={{ md: 3 }} */}

                    {/* look into "hero" headers */}
                    <Image id="welcomeImg"
                        src="https://s15.postimg.cc/7my6lzs57/LG_CPT-2948.jpg"

                    // LOGO: https://s19.postimg.cc/d7kexd5tv/MAjoritywins.png

                    />
                    {/* </Col> */}
                </div>
                <div id="brandingHeader">
                    <Image id="welcomeLogo"
                        src="https://s19.postimg.cc/d7kexd5tv/MAjoritywins.png"
                        circle
                    />
                    {/* <h1>
                        Welcome to Majority Wins!
                </h1> */}

                </div>

                <div id=
                    "CTA">
                    <h3>Where is your group off to?</h3>
                    <Button bsSize="large">
                        <Link
                            className="button-link"
                            to={{
                                pathname: `/addgroup`,
                            }}
                        >
                            Start New Group Trip
        </Link>
                    </Button>
                </div>
            </div>

            <div id="form">
                <SuggestionForm />
            </div>

        </React.Fragment>


    )
};