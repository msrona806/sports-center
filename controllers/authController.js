
const db = require("../models");

// Defining methods for the booksController
module.exports = {

  // POST route for saving a new user
  create: function (req, res) {
    console.log(req.body.username)
    console.log(req.body.password)
    console.log(req.body.email)
    console.log("New user added")
    // event.preventDefault();
    var user = {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    };   

    console.log( "\n user in create"+ user);
    // $("#subButton").click(function() {
    
    //   console.log("On Click submitting services working");
    // }),

    // Insert new user in to users database
    db.user.create(user).then(function (dbUser) {
      return res.json(dbUser);
    });

    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)

  }
}


