'use strict';

var bcrypt = require('bcrypt-nodejs')

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('user', {
    username: {type: DataTypes.STRING, unique: true, validate: { notEmpty: true}},
    password: {type: DataTypes.STRING, validate: { notEmpty: true}},
    email: DataTypes.STRING
    },{
    timestamps: false
  },{
    classMethods: {
      validPassword: function(password, passwd, done, user){
        bcrypt.compare(password, passwd, function(err, isMatch){
          if (err) console.log(err)
          if (isMatch) {
            return done(null, user)
          } else {
            return done(null, false)
          }
        });
      }
    }
  },
  {
      dialect: 'mysql'
  });

  // User.hook('beforeCreate', function(user, fn){
  //   var salt = bcrypt.genSalt(12, function(err, salt){
  //     return salt
  //   });
  //   bcrypt.hash(user.password, salt, null, function(err, hash){
  //     if(err) return next(err)
  //     user.password = hash;
  //     return fn(null, user)

  //   })
  // })
     
  return User;
};