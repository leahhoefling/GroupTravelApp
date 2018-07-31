import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import ApiManager from "../API/ApiManager";
import $ from 'jquery';


export default class Login extends Component {
  constructor(props) {
    super(props);
    //this is where I'm storing the input that the user inputs into the form
    this.state = {
      email: "",
      password: "",
    };
  }
  //this is just making sure the fields aren't empty. I can also add further requirements if I want to
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };


  handleSubmit = event => {
    event.preventDefault();

    ApiManager.getAll(`users?email=${this.state.email}`)
      .then(user => {
        if (user.length > 0 && this.state.password == user[0].password) {
          localStorage.setItem(
            "credentials",
            JSON.stringify({
              email: this.state.email,
              password: this.state.password,
              user: user[0].id

            })
          )
          this.props.history.push("/home");
        } else {
          alert(
            "Oops! You may have typed in the wrong email or password. Click 'OK' to try again."
          );
          this.props.history.push("/login");
        }

      })
    // .then(() => {
    //   const checkbox = document.getElementById("checkbox");
    //   console.log(checkbox);
    //   if (checkbox.checked) {
    //     if (this.state.userId) {
    //       localStorage.setItem(
    //         "credentials",
    //         JSON.stringify({
    //           email: this.state.email,
    //           password: this.state.password,
    //           userId: this.state.userId
    //         })
    //       );
    //     }
    //   } else {
    //     if (this.state.userId) {
    //       sessionStorage.setItem(
    //         "credentials",
    //         JSON.stringify({
    //           email: this.state.email,
    //           password: this.state.password,
    //           userId: this.state.userId
    //         })
    //       );
    //     }
    //   }
    // });
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
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
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <div>

            <label>Remember Me</label>
            <input type="checkbox" id="checkbox" />
          </div>

          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}
