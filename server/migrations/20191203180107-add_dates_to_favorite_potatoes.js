'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'FavoritePotatoes',
        'createdAt', {
          type: Sequelize.DATE
        }
      ),
      queryInterface.addColumn(
        'FavoritePotatoes',
        'updatedAt', {
          type: Sequelize.DATE
        }
      )
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
        'FavoritePotatoes',
        'createdAt'
      ),
      queryInterface.removeColumn(
        'FavoritePotatoes',
        'updatedAt'
      )
    ]);
  }
};
