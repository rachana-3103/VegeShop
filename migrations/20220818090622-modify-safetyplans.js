"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn("safetyplans", "location_id", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("safetyplans", "location_id");
  },
};
