'use strict'
  module.exports = function(sequelize, DataTypes) {
    var Events = sequelize.define("Events", {
      details: DataTypes.TEXT,
      event:  {
        type: DataTypes.STRING,
        allowNull: false
      },      
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      }, 
      location: {
        type: DataTypes.STRING,
        allowNull: false
      }  
    }, {
      timestamps: false
    });
    return Events;
  };