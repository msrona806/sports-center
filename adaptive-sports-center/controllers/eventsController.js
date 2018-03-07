var nodemailer = require('nodemailer');
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

    db.shared_events.findAll({where: {flag: 0}}).then(function (dbSharedEvents) {
      return res.json(dbSharedEvents);
    });
  },
  // searchKeyword: function (req, res) {
  //   db.searchKeyword({where: {}})
  // }
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
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'adaptivesportscenter.email@gmail.com',
      pass: 'Sidley2018'
    },
    tls: { rejectUnauthorized: false }
  });
  
  var mailOptions = {
    from: 'adaptivesportscenter.email@gmail.com',
    to: 'adaptivesportscenter.email@gmail.com, sharonay2015@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Shared event ' + SharedEvent.details
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  console.log( "\n Event in create"+ SharedEvent);
  db.shared_events.create(SharedEvent).then(function (dbSharedEvents) {
    return res.json(dbSharedEvents);
  }).catch(function(err){
    throw err;
  })
}
}


