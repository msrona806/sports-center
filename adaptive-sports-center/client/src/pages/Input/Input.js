import React, { Component } from "react";
import Button from "../../components/Button";
import API from "../../utils/API";


class Input extends Component {

  componentDidMount() {
    this.loadEvents();
  }

  loadEvents = () => {
    API.getEvents()
      .then(res =>
        this.setState({ events: res.data },
          console.log("hello world"),
          console.log(res.data))
      )
      .catch(err => console.log(err));
  };


  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.eventInput && this.state.detailsInput) {
      API.saveEvent({
        eventInput: this.state.eventInput,
        detailsInput: this.state.detailsInput,
        synopsis: this.state.synopsis
      })
      console.log("event button clicked")
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };


  render() {
    return (

      <div className="ui form">
      
        <div className="fields">
          <div className="eventInput">
            <label>Event Name:</label>
            <input type="text" placeholder="eventInput" />
          </div>
          <div className="detailsInput">
            <label>Event Details:</label>
            <input type="text" placeholder="detailsInput" />
          </div>
          <div className="dateInput">
            <label> Event Date:</label>
            <input type="date" placeholder="dateInput" />
          </div>
        </div>
        <div className="locationInput"> <label> Event Location: </label>

          <select className="ui search selection dropdown" id="search-select">
            <option value="">Select Location</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>

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
            <option value="International">International</option>
          </select>
        </div>
        <Button onClick ={handleFormSubmit} />         
    
      </div>
    )
  };
}

export default Input;