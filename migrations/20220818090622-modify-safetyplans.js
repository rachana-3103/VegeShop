"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("safetyplans", "location_id", {
      type: Sequelize.STRING,
      allowNull: true,
      after: "user_id",
    });
  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("safetyplans", "location_id");
  },
};
