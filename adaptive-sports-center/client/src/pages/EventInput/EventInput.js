import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Button from "../../components/Button";
import API from "../../utils/API";
import { Container } from 'semantic-ui-react';



class EventInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sportEvents: [],
      event_name: "",
      details: "",
      location: "",
      date: ""
    };


    this.handleChange = this.handleChange.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    });
  };

  _handleFormSubmit = event => {
    console.log("handle form submit")
    event.preventDefault()
    console.log(this.state.event_name)
    if (this.state.event_name && this.state.details) {
      API.saveEvent({
        event_name: this.state.event_name,
        details: this.state.details,
        location: this.state.location,
        date: this.state.date

      }); console.log("click")
      // .then(res => this.loadEvents())
      // .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container>
        <form>
          <div className="ui form">

            <div className="fields">
              <div className="eventInput">
                <label>Event Name:</label>
                <input name="event_name" type="text" id="event" placeholder="eventInput" value={this.state.event_name}
                  onChange={this.handleChange} />
              </div>
              <div className="detailsInput">
                <label>Event Details:</label>
                <input name="details" type="text" id="details" placeholder="detailsInput" value={this.state.details}
                  onChange={this.handleChange} />
              </div>
              <div className="dateInput">
                <label> Event Date:</label>
                <input name="date" type="date" id="date" placeholder="dateInput" value={this.state.date}
                  onChange={this.handleChange} />
              </div>
            </div>
            <div className="locationInput"> <label> Event Location: </label>
              <select className="ui search selection dropdown" id="location"
              name="location" 
              onChange={this.handleChange}>
                <option value="">Select Location</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
              </select>
            </div>
            <Button onClick={this._handleFormSubmit} >

              Click Me
        </Button>
          </div>
        </form>
      </Container>
    )
  };
};

export default EventInput;