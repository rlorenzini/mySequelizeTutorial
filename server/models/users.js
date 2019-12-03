'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    Users.hasMany(models.FavoritePotatoes, {
      as: 'FavoritePotatoes',
      foreignKey: 'userid'
    })
  };
  return Users;
};
