import React, { Component } from "react";
import Title from "../../components/Title";
import API from "../../utils/API";
import EventCard from "../../components/EventCard";

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
            // url={events.url}
            // date={events.date}
           
            
          />
        ))}

      </div>
    )
  }
}
export default Events;