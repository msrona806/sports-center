var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, user) {


    //Initialize the passport-local strategy, and the user model, which will be passed as an argument.
    var User = user;
    var LocalStrategy = require('passport-local').Strategy;
 

 //serialize
passport.serializeUser(function(user, done) { 
    done(null, user.id); 
});

// // deserialize user 
 passport.deserializeUser(function(id, done) { 
    User.findById(id).then(function(user) {
         if (user) {
             done(null, user.get());
         } else {
            done(user.errors, null);
        }
    });
 });
    //define a custom strategy with the instance of the LocalStrategy
    passport.use('local-signup', new LocalStrategy(
 
    {
        usernameField: 'username',
        passwordField: 'password',
        //allows to pass the entire request to the callback, which is useful for signing up
        passReqToCallback: true 
 
    },
    function(req, email, password, done) {
        var generateHash = function(password) {
            return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };

      User.findOne({
        where: {
            username: username
        }
    }).then(function(user) {
     
        if (user)     
        {
            return done(null, false, {
                message: 'That username is already taken'
            });
        } else
        {     
            var userPassword = generateHash(password);
            var data =
     
                { 
                    username: username, 
                    password: password,   
                    email: email  
                };
            //Sequelize method for adding new entries to the database. Notice that the values in the data object are gotten from the req.body object which contains the input from our signup form. 
            User.create(data).then(function(newUser, created) {
     
                if (!newUser) {     
                    return done(null, false);
                }
     
                if (newUser) {     
                    return done(null, newUser);
                }
            });
         }
    });
    }
));
}

//     //function to handle storing a user's details.
//     function(req, email, password, done) {
    
//         //add hashed password generating function inside the callback function
//         var generateHash = function(password) {
 
//         return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
 
//         };

//         //Then, using the Sequelize user model, check to see if the user already exists, and if not add them.
//         User.findOne({
//     where: {
//         email: email
//     }
// }).then(function(user) {
 
//     if (user)
 
//     {
 
//         return done(null, false, {
//             message: 'That email is already taken'
//         });
 
//     } else
 
//     {
 
//         var userPassword = generateHash(password);
 
//         var data =
 
//             {
//                 email: email,
 
//                 password: userPassword,
 
//                 name: req.body.name,
 
//                 zipcode: req.body.zipcode
 
//             };
 
//         //Sequelize method for adding new entries to the database. Notice that the values in the data object are gotten from the req.body object which contains the input from the signup form. 
//         User.create(data).then(function(newUser, created) {
 
//             if (!newUser) {
 
//                 return done(null, false);
 
//             }
 
//             if (newUser) {
 
//                 return done(null, newUser);
 
//             }
 
//         });
 
//     }
 
// });


//     }

 
// ));

//     //LOCAL SIGNIN
// passport.use('local-signin', new LocalStrategy(
 
//     {
 
//         // by default, local strategy uses username and password, we will override with email
 
//         usernameField: 'email',
 
//         passwordField: 'password',
 
//         passReqToCallback: true // allows us to pass back the entire request to the callback
 
//     },
 
 
//     function(req, email, password, done) {
 
//         var User = user;
 
//         var isValidPassword = function(userpass, password) {
 
//             return bCrypt.compareSync(password, userpass);
 
//         }
 
//         User.findOne({
//             where: {
//                 email: email
//             }
//         }).then(function(user) {
 
//             if (!user) {
 
//                 return done(null, false, {
//                     message: 'Email does not exist'
//                 });
 
//             }
 
//             if (!isValidPassword(user.password, password)) {
 
//                 return done(null, false, {
//                     message: 'Incorrect password.'
//                 });
 
//             }
 
 
//             var userinfo = user.get();
//             return done(null, userinfo);
 
 
//         }).catch(function(err) {
 
//             console.log("Error:", err);
 
//             return done(null, false, {
//                 message: 'Something went wrong with your Signin'
//             });
 
//         });
 
//     }
 
// ));

// //LOCAL SIGNIN
// passport.use('local-signin', new LocalStrategy(
 
//     {
 
//         // by default, local strategy uses username and password, we will override with email
 
//         usernameField: 'email',
 
//         passwordField: 'password',
 
//         passReqToCallback: true // allows us to pass back the entire request to the callback
 
//     },
 
 
//     function(req, email, password, done) {
 
//         var User = user;
 
//         var isValidPassword = function(userpass, password) {
 
//             return bCrypt.compareSync(password, userpass);
 
//         }
 
//         User.findOne({
//             where: {
//                 email: email
//             }
//         }).then(function(user) {
 
//             if (!user) {
 
//                 return done(null, false, {
//                     message: 'Email does not exist'
//                 });
 
//             }
 
//             if (!isValidPassword(user.password, password)) {
 
//                 return done(null, false, {
//                     message: 'Incorrect password.'
//                 });
 
//             }
 
 
//             var userinfo = user.get();
//             return done(null, userinfo);
 
 
//         }).catch(function(err) {
 
//             console.log("Error:", err);
 
//             return done(null, false, {
//                 message: 'Something went wrong with your Signin'
//             });
 
//         });
 
 
//     }
 
// ));

// }