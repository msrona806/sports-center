'use strict'
  module.exports = function(sequelize, DataTypes) {
    var SharedEvents = sequelize.define("shared_events", {
      event: DataTypes.STRING,
      date: DataTypes.DATE,
      details: DataTypes.TEXT
    }, {
      timestamps: false
    });
    return SharedEvents;
  };