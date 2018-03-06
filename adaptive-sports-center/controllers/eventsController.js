
const db = require("../models");

// Defining methods for the booksController
module.exports = {

  // GET route for getting all of the events
  // app.get("/api/events", function(req, res) {


  findAll: function (req, res) {
    console.log("find all events")
    // res.json([{name: "test"}])
    // res.json(db.Events.findAll({}));
    db.Events.findAll({}).then(function (dbEvents) {
      return res.json(dbEvents);
    });
  },
  //SEPERATE TABLE FOR USER CREATED EVENTS
  findAllShared: function (req, res) {
    console.log("find all user created events")

    db.shared_events.findAll({}).then(function (dbSharedEvents) {
      return res.json(dbSharedEvents);
    });
  },

  // POST route for saving a new event\
  create: function (req, res) {
    console.log("New event added")
    // event.preventDefault();
    var event = {
      
      details: req.body.details,
      event: req.body.event_name
      
    };   

    console.log( "\n Event in create"+ event);

    // Insert new event in to Events database
    db.Events.create(event).then(function (dbEvents) {
      return res.json(dbEvents);
    });
  },

     // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)

  createShared: function (req, res) {
    console.log("Shared event added")

  var SharedEvent = {
    date: req.body.date,
    details: req.body.details,
    event: req.body.event_name,
    location: req.body.location
  };   
 
  console.log( "\n Event in create"+ SharedEvent);
  db.shared_events.create(SharedEvent).then(function (dbSharedEvents) {
    return res.json(dbSharedEvents);
  }).catch(function(err){
    throw err;
  })
}
}


