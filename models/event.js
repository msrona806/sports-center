'use strict'
  module.exports = function(sequelize, DataTypes) {
    var Events = sequelize.define("Events", {
      details: DataTypes.TEXT,
      link: DataTypes.TEXT,
      event:  {
        type: DataTypes.STRING,
        allowNull: false
      },      
      // date: {
      //   type: DataTypes.DATE,
      //   allowNull: false,
      // }, 
      // location: {
      //   type: DataTypes.STRING,
      //   allowNull: false
      // }  
    }, {
      timestamps: false
    });
    return Events;
  };

  // MAKE AN EMAIL PROPERTY
  //MAKE A MAILTO IN FORM TO SEND EMAIL TO EVENT ORGANIZERE
  //ADD LINK TO SEND EMAIL ON EVENT CARD
  