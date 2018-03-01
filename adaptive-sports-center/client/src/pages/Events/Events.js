import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Title from "../../components/Title";
import API from "../../utils/API";
import EventCard from "../../components/EventCard";

// import If from 'react-iframe';
import UsaEvents from "../../components/UsaEvents"

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
            key={events.id}
            id={events.id}
            details={events.details}
            event={events.event}
            date={events.date} 
            location={events.location} 
          />
         ))}
         <UsaEvents />
       
      </div>
    )
  }
}
export default Events;


  // <h3> {location}  </h3>