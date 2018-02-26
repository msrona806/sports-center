import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Button from "../../components/Button";
import API from "../../utils/API";
import { Container } from 'semantic-ui-react';



class EventInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sportEvents: [],
      event: "test",
      details: "",
      location: "",
      date: ""
    };
  

    this.handleChange = this.handleChange.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

 

  componentDidMount() {
    this.loadEvents();
  };

  // loadEvents = () => {
  //   API.getEvents()
  //     .then(res =>
  //       this.setState({ events: res.data },
  //         console.log("hello world"),
  //         console.log(res.data))
  //     )
  //     .catch(err => console.log(err));
  // };


//  _handleFormSubmit= event => {
//     console.log("click");
 
//     console.log(this.state);
//     event.preventDefault();
//     const data = new FormData(event.target);
//     // if (this.state.event && this.state.details) {
//       console.log(data);
//       API.saveEvent(
//         data
//         // detailsInput: this.state.details

//       ).then(res => this.loadEvents());
//       console.log("event button clicked")
//         // .then(res => this.loadEvents())
//         // .catch(err => console.log(err));
//     // }
//   };

  _handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.event && this.state.details) {
      API.saveEvent({
        event: this.state.event,
        details: this.state.details,
    location: this.state.location,
    date: this.state.date
        
      })
        .then(res => this.loadEvents())
        .catch(err => console.log(err));
    }
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <Container>
        <form  >
          
        {/* <input type="text"
                value={this.state.event}
                onChange={this.handleChange}
                name="event"
               
              />
              <input type="text"
              
                value={this.state.details}
                onChange={this.handleChange}
                name="details"
                
              />          */}
       
        <div className="ui form">

          <div className="fields">
            <div className="eventInput">
              <label>Event Name:</label>
              <input type="text" id="event" placeholder="eventInput" value={this.state.event}
                onChange={this.handleChange}  />
            </div>
            <div className="detailsInput">
              <label>Event Details:</label>
              <input type="text" id="details" placeholder="detailsInput" />
            </div>
            <div className="dateInput">
              <label> Event Date:</label>
              <input type="date" id="date" placeholder="dateInput" />
            </div>
          </div>
          <div className="locationInput"> <label> Event Location: </label>

            <select className="ui search selection dropdown" id="location">
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
          <Button onClick={() => this._handleFormSubmit} >

            Click Me
        </Button> 
        </div> 
      </form>
      </Container>
    )};
  };
 
export default EventInput;