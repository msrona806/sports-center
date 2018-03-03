import axios from "axios";

export default {
  // Gets all events
  getEvents: function() {
    return axios.get("/api/events");
  },
  // Saves an event to the database
  saveEvent: function(eventData) {
    console.log("inside save event" + eventData);
    return axios.post("/api/events", eventData);
  }
  // saves a user to the database
  // saveUser: function(userData) {
  //   console.log("inside user event" + userData)
  //   return axios.post("/api/signup", userData);
  // }
};
