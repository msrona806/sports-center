import React, { Component } from "react";
// import { Link } from "react-router-dom";
import {Container} from 'semantic-ui-react';
import { Card } from 'semantic-ui-react'
import Title from "../../components/Title";
import API from "../../utils/API";
import EventCard from "../../components/EventCard";

// import If from 'react-iframe';
// import UsaEvents from "../../components/UsaEvents"

class Events extends Component {

  state = {
    events: [],
    sharedevents: [],
    date: "",
    location: "", 
    details: "" 
  };

  componentDidMount() {
    this.loadSharedEvents();
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

  loadSharedEvents = () => {
    API.getSharedEvents()
      .then(res =>
        this.setState({ sharedevents: res.data },
          console.log("hello world"),
          console.log(res.data))
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
    <Container>
    <Title />
     <h2><u>Current Events</u></h2>
      <Card.Group>
           {this.state.sharedevents.map(sharedevents => ( 
          <EventCard
          key={sharedevents.id}
          id={sharedevents.id}
          details={sharedevents.details}
          event={sharedevents.event}
          date={sharedevents.date} 
          location={sharedevents.location} 
          link={sharedevents.link} 
        />
         ))} 
        
        {this.state.events.map(events => (
          <EventCard
          key={events.id}
          id={events.id}
          details={events.details}
          event={events.event}
          link={events.link}
        />
         ))}
         
        </Card.Group> 
        
        
     </Container>
     
    )
  }
}
export default Events;


  // <h3> {location}  </h3>