// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models

const path =require ("path");
const router = require ("express").Router();
const apiRoutes = require("./api");


router.use("/api", apiRoutes);

router.use((req, res) => 
res.sendFile(path.join(__dirname, "..client/build/index.html"))
);

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
