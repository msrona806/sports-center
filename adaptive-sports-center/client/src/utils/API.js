import axios from "axios";

export default {
  // Gets all events
  getEvents: function() {
    return axios.get("/api/events");
  },
  // Saves an event to the database
  saveEvent: function(event) {
    return axios.post("/api/events", event);
  }
};
