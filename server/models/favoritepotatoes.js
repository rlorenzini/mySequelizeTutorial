'use strict';
module.exports = (sequelize, DataTypes) => {
  const FavoritePotatoes = sequelize.define('FavoritePotatoes', {
    userid: DataTypes.INTEGER,
    potatoid: DataTypes.INTEGER
  }, {});
  FavoritePotatoes.associate = function(models) {
    // associations can be defined here
  };
  return FavoritePotatoes;
};
