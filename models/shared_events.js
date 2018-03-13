'use strict'
  module.exports = function(sequelize, DataTypes) {
    var SharedEvents = sequelize.define("shared_events", {
      event: DataTypes.STRING,
      date: DataTypes.DATE,
      details: DataTypes.TEXT,
      link: DataTypes.TEXT,
      // Flag entry to be reviewed
      flag: { type: DataTypes.BOOLEAN, defaultValue: true }
      }, {
      timestamps: false
    });
    return SharedEvents;
  };