"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
      queryInterface.addColumn("users", "altitude", {
        type: Sequelize.STRING,
      });
  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("users", "altitude");

  },
};
