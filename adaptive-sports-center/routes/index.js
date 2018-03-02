// *********************************************************************************
// events.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models

const path =require ("path");
const router = require ("express").Router();
const apiRoutes = require("./api");
var passport = require("passport");
var session = require("express-session");
var bodyParser = require('body-parser')
var env = require('dotenv').load();

//===================ROUTES===================================

router.use("/api", apiRoutes);

router.get('/', function(req, res) {
 
  res.send('Welcome to Passport with Sequelize');


//   router.get('/signup', authController.signup);
// router.post('/signup', passport.authenticate('local-signup', {
//   successRedirect: '/allevents',

//   failureRedirect: '/signup'
// }
// ));
});

//===============BODY-PARSER====================================
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
router.use(bodyParser.json());

//===================PASSPORT===================================
// session secret
router.use(session({secret:'keyboard cat', resave: true, saveUninitialized: true}));
router.use(passport.initialize());
// persistent login session
router.use(passport.session());



//load passport strategies
// require('./config/passport/passport.js')(passport, db.user);



// router.use((req, res) => 
// res.sendFile(path.join(__dirname, "..client/build/index.html"))
// );

module.exports = router;






// // Routes
// // =============================================================
// module.exports = function(app) {

//   // GET route for getting all of the todos
//   app.get("/api/events", function(req, res) {

//   });

//   // POST route for saving a new todo. You can create a todo using the data on req.body
//   app.post("/api/events", function(req, res) {

//   });

//   // DELETE route for deleting todos. You can access the todo's id in req.params.id
//   // app.delete("/api/todos/:id", function(req, res) {

//   // });

//   // PUT route for updating todos. The updated todo will be available in req.body
//   app.put("/api/events", function(req, res) {

//   });
// };
