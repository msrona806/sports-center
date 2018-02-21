
const db = require("../models");

// Defining methods for the booksController
module.exports =  {
  
  // GET route for getting all of the events
  // app.get("/api/events", function(req, res) {
        
  
  findAll: function(req, res) {
    db.Events
      .findall({}).then(dbEvents => res.json(dbEvents))
  }
}   
// });
