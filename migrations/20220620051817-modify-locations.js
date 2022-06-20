"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("locations", "address", {
      type: Sequelize.STRING,
    });
  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("locations", "address");
  },
};
