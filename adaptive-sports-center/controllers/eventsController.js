
const db = require("../models");

// Defining methods for the booksController
module.exports = function(app) {
  
  // GET route for getting all of the events
  app.get("/api/events", function(req, res) {
  
  db.Events.findAll({}).then(function(dbEvents) {
    // We have access to the events as an argument inside of the callback function
    res.json(dbEvents);
  });
});
}