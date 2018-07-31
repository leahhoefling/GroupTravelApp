import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import ApiManager from "../API/ApiManager";
export default class AddGroupTrip extends Component {
    constructor(props) {
        super(props);
        //this is where I'm storing the input that the user inputs into the form
        this.state = {
            name: "",
            date: "",
            user: ""
        };
    }
    //this is just making sure the fields aren't empty. I can also add further requirements if I want to
    validateForm() {
        return this.state.name.length > 0 && this.state.date.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        let signedInUser = JSON.parse(localStorage.getItem("credentials"));
        if (signedInUser === null) {
            signedInUser = JSON.parse(sessionStorage.getItem("credentials"));
            signedInUser = signedInUser.user;
        } else {
            signedInUser = signedInUser.user;
        }

        let newGroup = {
            name: this.state.name,
            date: this.state.date,
            userId: signedInUser
        }

        ApiManager.postItem("groups", newGroup)
            .then(() => {
                //redirects to "my trips" so they can see what they added
                this.props.history.push('/mytrips')
            })
    };



    render() {
        return (
            <div className="groupTrip">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="name" bsSize="large">
                        <ControlLabel>Name of Trip</ControlLabel>
                        <FormControl
                            //autofocus gives attn to the email input for the user to know where to type
                            autoFocus
                            type="text"
                            placeholder="Group + Location (i.e. Smith Family- London)"
                            //this sets the state each time when user inputs
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="date" bsSize="large">
                        <ControlLabel>Start Date of Trip</ControlLabel>
                        <FormControl
                            value={this.state.date}
                            onChange={this.handleChange}
                            type="date"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Add Group Trip
          </Button>
                </form>
            </div>
        );
    }
}
