'use strict'
  module.exports = function(sequelize, DataTypes) {
    var MyEvents = sequelize.define("my_events", {
      event: DataTypes.STRING,
      date: DataTypes.DATE,
      details: DataTypes.TEXT
    }, {
      timestamps: false
    });
    return MyEvents;
  };