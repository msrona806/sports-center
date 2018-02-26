import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Title from "../../components/Title";
import API from "../../utils/API";
import EventCard from "../../components/EventCard";
// import Input from "../../components/Input"

class Events extends Component {

  state = {
    events: [],
    date: "",
    location: "",
    details: ""
  };

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
 

  render() {
    return (
      <div>
        <Title />
        {this.state.events.map(events => (
          <EventCard
            // key={events._id}
            // _id={events._id}
            details={events.details}
            event={events.event}
            date={events.date} 
            location={events.location} 
          />
         ))}
            

      </div>
    )
  }
}
export default Events;