// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
// var bodyParser = require("body-parser");
var routes = require("./routes");
// var session = require("express-session");
var env = require("dotenv").load();
var passport = require("passport");
var axios = require("axios");
var cheerio = require("cheerio");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring for models syncing
var db = require("./models");
require('./routes/api/auth.js')(app, passport);

//===============BODY-PARSER====================================
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
// // parse application/json
// app.use(bodyParser.json());

// //===================PASSPORT===================================
// // session secret
// app.use(session({secret:'keyboard cat', resave: true, saveUninitialized: true}));
// app.use(passport.initialize());
// // persistent login session
// app.use(passport.session());

//load passport strategies
// require('./config/passport/passport.js')(passport, db.user);


//====================ROUTES=====================================
app.use(routes);
// Static directory
// app.use(express.static("public"));

//load passport strategies
require("./config/passport/passport.js")(passport, db.user);
app.get("/", function (req, res) {
	res.render("index");
});
// =============================================================
// require("./routes")(app);
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
//======================SEQUELIZE===============================
// Syncing our sequelize models and then starting our Express app
db.sequelize.sync().then(function(err) {
 
      console.log("DB looks good!");
  }).catch(function(err) {
    console.log("Something went wrong with the database!")
  });
  