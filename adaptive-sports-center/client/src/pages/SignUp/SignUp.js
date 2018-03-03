import React, { Component } from "react";
import { Grid } from 'semantic-ui-react'
import './SignUp.css'
import { FormBtn } from '../../components/Form'
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
      <Grid>
        <Grid.Column width={8}>
          <form id="signup" name="signup" method="post" action="/signup">

            <div className="user">
              <label> Username:</label>
              <input name="username" type="text" placeholder="Create username" onChange={this.handleChange} />
            </div>

            <div className="password">
              <label> Password:</label>
              <input name="password" type="password" placeholder="Create password" onChange={this.handleChange} />
            </div>

            <div className="email">
              <label> Email:</label>
              <input name="email" type="email" placeholder="Enter email address" onChange={this.handleChange} />
            </div>

            <FormBtn onClick={this._handleFormSubmit} />
          </form>
        </Grid.Column>
      </Grid>


    )
  };
};

export default Signup;
