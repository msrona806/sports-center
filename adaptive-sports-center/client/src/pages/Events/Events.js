import React, { Component } from "react";
import Title from "../../components/Title";

import EventCard from "../../components/EventCard";

class Events extends Component {
  render() {
    return (
      <div>
        <Title />
        <EventCard />
      </div>
    )
  }
}
export default Events;