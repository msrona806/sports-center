import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Button from "../../components/Button";
import API from "../../utils/API";
import { Container, Form } from 'semantic-ui-react';
import AgreeModal from '../../components/Modal'

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
      API.saveEventShared({
        event_name: this.state.event_name,
        details: this.state.details,
        location: this.state.location,
        date: this.state.date

      }); 
      this.EventInput.reset();
      alert("Event submitted for review. Event will be added to list of events upon approval. Please allow up to 5 business days for approval");
      // .then(res => this.loadEvents())
      // .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container>
        <h2>Submit an event to be added to the site</h2>
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
            <div className="eventLink">
                <label> Event Link</label>
                <input name="link" type="url" id="link" placeholder="eventLink" value={this.state.link}
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
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
                <option value="Intl">International</option>

              </select>
            </div>
            
          </div>
        </form>
        <button onClick={this._handleFormSubmit} >Click Me </button>
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <AgreeModal />
      </Container>
    )
  };
};

export default EventInput;