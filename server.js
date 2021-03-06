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
var passport = require("passport");
var axios = require("axios");
var cheerio = require("cheerio");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring for models syncing
var db = require("./models");
// require('./routes/api/auth.js')(app, passport);

//===============BODY-PARSER====================================
// // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// // parse application/json
app.use(bodyParser.json());

// //===================PASSPORT===================================
// // session secret
// app.use(session({secret:'keyboard cat', resave: true, saveUninitialized: true}));
// app.use(passport.initialize());
// // // persistent login session
// app.use(passport.session());

// //load passport strategies
// require('./config/passport/passport.js')(passport, db.user);


//====================ROUTES=====================================
app.use(routes);
// Static directory
app.use(express.static("public"));

// app.set('view engine', 'html')

//load passport strategies
// require("./config/passport/passport.js")(passport, db.user);
// app.get("/", function (req, res) {
// 	res.render("index");
// });


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
  
  app.get("/scrape", function (req, res) {
    // get the body of the html
    axios.get("http://www.disabledsportsusa.org/events/").then(function (response) {
      //load response into cheerio
      var $ = cheerio.load(response.data);
      // console.log(response.data);

  

      $(".event-info").each(function (i, body) {
        var result = {};
        result.event = $(this).find("h3").text();
        result.link =  $(this).find("a").attr("href");
        //delete current records is table
        db.Events.destroy({
          where: {}
        });
    
         // Create a new Article using the `result` object built from scraping
			db.Events.create(result)
      .then(function (dbEvents) {
        // View the added result in the console
        // console.log(dbEvents);
      })
      .catch(function (err) {
        // If an error occurred, send it to the client
        console.log(err);
      });
      console.log(result.event);	
      console.log(result.link);
    	});
      }),

      axios.get("http://www.nwba.org/page/show/2024662-events").then(function (response) {
        //load response into cheerio
        var $ = cheerio.load(response.data);
        // console.log(response.data);
    
        $('.summary').each(function (i, body) {
          var result = {};
          result.event = $(this).find("a").text();
          result.link = $(this).find("a").attr("href");
          
          db.Events.create(result)
          .then(function (dbEvents) {

            
            // View the added result in the console
            // console.log(dbEvents);
          })
          .catch(function (err) {
            // If an error occurred, send it to the client
            console.log(err);
          });
        console.log(result.event);	
        console.log(result.link);	
      });
        });
  
      // If we were able to successfully scrape and save an Article, send a message to the client
      // res.send("Scraper Complete");
      res.redirect("http://localhost:3000/allevents");
    });
