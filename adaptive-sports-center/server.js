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
var http = require("http");
var passportConfig = require('./config/passport/passport');
var application = require('./routes/application');
var user = require('./routes/user');
var cookieParser = require("cookie-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring for models syncing
var db = require("./models");

//===============BODY-PARSER====================================
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//===================PASSPORT===================================

SALT_WORK_FACTOR = 12;

app.use('/public', express.static(__dirname+'/public'));

app.set('views', __dirname + '/views')

// app.use(express.urlencoded())
// app.use(express.bodyParser())
app.use(cookieParser)
app.use(session({secret:'keyboard cat', resave: true, saveUninitialized: true}));
// app.use(session({ secret: 'goatjsformakebettersecurity'}))
app.use(passport.initialize())
app.use(passport.session())
// app.use(app.router)

// if ('development' === app.get('env')) {
// 	app.use(express.errorHandler())
// }

app.get('/allevents', application.IsAuthenticated)
app.post('/authenticate',
  passport.authenticate('local',{
	successRedirect: '/allevents',
	failureRedirect: '/'
  })
)
app.get('/logout', application.destroySession)
app.get('/signup', user.signUp)
app.post('/register', user.register)


//====================ROUTES=====================================
// app.use(routes);
// Static directory
// app.use(express.static("public"));

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
  })
  app.get("/usa", function (req, res) {
    //get the body of the html
    axios.get("http://www.disabledsportsusa.org/events/").then(function (response) {
      //load response into cheerio
      var $ = cheerio.load(response.data);
      // console.log(response.data);
  
      $(".event-info").each(function (i, body) {
        var result = {};
        result.title = $(this).find("h3").text();
        result.link = "http://www.disabledsportsusa.org/events/" + $(this).find("a").attr("href");		
      console.log(result.title);	
      console.log(result.link);	});
      });
  
      // If we were able to successfully scrape and save an Article, send a message to the client
      res.send("Scraper Complete");
    });
    app.use(routes);