
  module.exports = function(sequelize, DataTypes) {
    var Events = sequelize.define("Events", {
      event: DataTypes.STRING,
      date: DataTypes.DATE,
      details: DataTypes.STRING,
    });
    return Events;
  };