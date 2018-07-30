import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import ApiManager from "../API/ApiManager";

export default class Register extends Component {
    //this is where I'm storing the input that the user inputs into the form
    state = {
        email: "",
        name: "",
        password: ""
    };
    //this is just making sure the fields aren't empty. I can also add further requirements if I want to
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    // Update state whenever an input field is edited
    handleChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };


    handleRegister = event => {
        event.preventDefault()

        let registeredUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        ApiManager.postItem("users", registeredUser)
            .then(() => {
                this.props.history.push('/login')
            })
    }

    render() {
        return (
            <div className="Register">
                <form onSubmit={this.handleRegister}>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            //autofocus gives attn to the email input for the user to know where to type
                            autoFocus
                            type="email"
                            //this sets the state each time when user inputs
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="name" bsSize="large">
                        <ControlLabel>Name</ControlLabel>
                        <FormControl
                            value={this.state.name}
                            onChange={this.handleChange}
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Register
          </Button>
                </form>
            </div>
        );
    }
}
