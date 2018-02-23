
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

  // POST route for saving a new event\
  create: function (Event) {
    console.log("New event added")
    event.preventDefault();
    var event = {
      date: req.body.date,
      details: req.body.details,
      event: req.body.event,
      location: req.body.location
    };


    // Insert new event in to Events databack
    db.Events.create({}).then(function (dbEvents) {
      return res.json(dbEvents);
    });

    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)

  }
}


