
const db = require("../models");

// Defining methods for the booksController
module.exports =  {
  
  // GET route for getting all of the events
  // app.get("/api/events", function(req, res) {
        
  
  findAll: function(req, res) {
    console.log("find all events")
    // res.json([{name: "test"}])
    // res.json(db.Events.findAll({}));
    db.Events.findAll({}).then(function(dbEvents) {
      return res.json(dbEvents);
    });
  }




  //   db.Events
  //     .find(req.query).then(dbEvents => res.json(dbEvents))
  // }
// })  
}
