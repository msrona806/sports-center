// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes");
var session = require("express-session");
var env = require("dotenv").load();

// Requiring for models syncing
var db = require("./models");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

//===============BODY-PARSER====================================
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//===================PASSPORT===================================
// session secret
app.use(session({secret:'keyboard cat', resave: true, saveUninitialized: true}));
app.use(passport.initialize());
// persistent login session
app.use(passport.session());

//load passport strategies
require('./config/passport/passport.js')(passport, db.user);


//====================ROUTES=====================================
app.use(routes);
// Static directory
// app.use(express.static("public"));

// =============================================================
// require("./routes")(app);

//======================SEQUELIZE===============================
// Syncing our sequelize models and then starting our Express app
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  }).catch(function(err) {
    console.log("Something went wrong with the database!")
  })
});
