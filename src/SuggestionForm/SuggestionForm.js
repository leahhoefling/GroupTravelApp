import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, MenuItem, DropdownButton, ButtonToolbar } from "react-bootstrap";
import ApiManager from "../API/ApiManager";
import "./SuggestionForm.css";


export default class SuggestionForm extends Component {
    constructor(props) {
        super(props);
        //this is where I'm storing the input that the user inputs into the suggestion form
        this.state = {
            trip: "",
            name: "",
            cost: "",
            description: "",
            link: "",
            rank: 0,
            user: ApiManager.getIdofCurrentUser(),
        };
    }
    //this is just making sure the field isn't empty. I can also add further requirements if I want to
    validateForm() {
        return this.state.name.length > 0 && this.state.cost.length > 0 && this.state.description.length > 0;
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
        console.log("signed user", signedInUser);


        let newSuggestion = {
            name: this.state.name,
            cost: this.state.cost,
            description: this.state.description,
            link: this.state.link,
            tripId: this.state.tripId,
            userId: ApiManager.getIdofCurrentUser(),
            rank: 0

        }

        ApiManager.postItem("suggestions", newSuggestion)
            .then(() => {
                //redirects to "my trips" so they can see what they added
                this.props.history.push('/mytrips')
            })
    };



    render() {
        return (
            <div className="suggestion">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="trip" bsSize="large">
                        <ControlLabel>Select Which Trip You're Adding a Suggestion To:</ControlLabel>
                        <ButtonToolbar>
                            <DropdownButton title="Select Group Trip" id="dropdown-size-medium">
                                <MenuItem eventKey="1">Action</MenuItem>
                                <MenuItem eventKey="2">Another action</MenuItem>
                                <MenuItem eventKey="3">Something else here</MenuItem>
                                <MenuItem eventKey="4">Separated link</MenuItem>
                            </DropdownButton>
                        </ButtonToolbar>
                    </FormGroup>
                    <FormGroup controlId="name" bsSize="large">
                        <ControlLabel>Suggestion Name</ControlLabel>
                        <FormControl
                            //autofocus gives attn to the email input for the user to know where to type
                            autoFocus
                            type="text"
                            placeholder="(e.g., Visit the Eiffel Tower)"
                            //this sets the state each time when user inputs
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="cost" bsSize="large">
                        <ControlLabel>Cost of Suggestion</ControlLabel>
                        <FormControl
                            value={this.state.cost}
                            onChange={this.handleChange}
                            placeholder="(e.g., $29.04)"
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup controlId="description" bsSize="large">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl
                            value={this.state.description}
                            onChange={this.handleChange}
                            placeholder="(e.g., 'It is THE eiffel tower. We MUST go!')"

                            type="text"
                        />
                    </FormGroup>
                    <FormGroup controlId="link" bsSize="large">
                        <ControlLabel>Link to Suggestion</ControlLabel>
                        <FormControl
                            value={this.state.link}
                            onChange={this.handleChange}
                            placeholder="(e.g., https://www.toureiffel.paris/)"
                            type="url"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Add New Suggestion
          </Button>
                </form>
            </div>
        );
    }
}
