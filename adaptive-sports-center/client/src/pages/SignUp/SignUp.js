import React, { Component } from "react";
// import { Grid } from 'semantic-ui-react'
import './SignUp.css'
// import SubmitEvent from '../../components/Form';
import {FormBtn} from '../../components/Form';
import API from "../../utils/API";


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  _handleFormSubmit = event => {
    console.log("handle user form submit");
    event.preventDefault();
    window.location.href = "/allevents";
    console.log(this.state.username);
    console.log(this.state.password);
    console.log(this.state.email);
    if (this.state.username && this.state.password) {
      console.log("click");
      API.saveUser({
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
      });
      // .then(res => this.loadEvents())
      // .catch(err => console.log(err));
    } else {
      console.log("missing information");
    }
  };

  render() {
    return (
      // <SubmitEvent />
      <FormBtn />
    )
  };
};

export default Signup;
