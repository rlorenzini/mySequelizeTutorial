'use strict';
module.exports = (sequelize, DataTypes) => {
  const potatoes = sequelize.define('potatoes', {
    name: DataTypes.STRING,
    starch_level: DataTypes.STRING,
    cook_method: DataTypes.STRING
  }, {});
  potatoes.associate = function(models) {
    // associations can be defined here
  };
  return potatoes;
};