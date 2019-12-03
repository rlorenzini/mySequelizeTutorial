'use strict';
module.exports = (sequelize, DataTypes) => {
  const potatoes = sequelize.define('potatoes', {
    name: DataTypes.STRING,
    starch_level: DataTypes.STRING,
    cook_method: DataTypes.STRING
  }, {});
  potatoes.associate = function(models) {
    potatoes.hasMany(models.FavoritePotatoes, {
      as: 'FavoritePotatoes',
      foreignKey: 'potatoid'
    })
  };
  return potatoes;
};
