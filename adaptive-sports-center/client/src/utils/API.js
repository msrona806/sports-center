import axios from "axios";

export default {
  // Gets all events
  getEvents: function () {
    return axios.get("/api/events");
  },
  // Gets all shared events
  getSharedEvents: function () {
    return axios.get("/api/sharedevents");
  },

  // Saves an event to the database
  saveEvent: function (eventData) {
    console.log("inside save event" + eventData);
    return axios.post("/api/events", eventData);
  },

  // Saves an event to the database
  saveEventShared: function (eventData) {
    console.log("inside save event" + eventData);
    return axios.post("/api/sharedevents", eventData);
  },


  // saves a user to the database
  saveUser: function (userData) {
    console.log("inside user event" + userData)
    return axios.post("/api/signup/signup", userData);
  }
};
