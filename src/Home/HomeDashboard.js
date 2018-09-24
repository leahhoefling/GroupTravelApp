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

                </div>
                <div id="bothCTA">
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
                <div id=
                    "CTA">
                    <h3>Add a New Suggestion for Your Group Trip!</h3>
                    <Button bsSize="large">
                        <Link
                            className="button-link"
                            to={{
                                pathname: `/suggestion`,
                            }}
                        >
                            Add Suggestion
        </Link>
                    </Button>
                </div>
            </div>

        </React.Fragment >


    )
};