// const passport = require("../../config/passport/passport.js");
// const passport = require("passport");
const authController = require('../../controllers/authcontroller.js');
const router = require("express").Router();

 
module.exports = function(app, passport) {
 
    app.get('/signup', authController.signup);
    app.post('/signup', passport.authenticate('local-signup'), {
        successRedirect: '/allevents',

        failureRedirect: '/signup'
    }
);
}

router.route("/signup")
    .get(authController.signup)
    .post(function (req,res) {
    var username = req.body.username;
    var password = req.body.password;
    console.log("post successful", username, password);
})

// module.exports = router;