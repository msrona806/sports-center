module.exports = function(sequelize, DataTypes) {
  var Sport = sequelize.define("Sport", {
    text: DataTypes.STRING,
    date: DataTypes.DATE,
    description: DataTypes.TEXT
  });
  return Sport;
};