"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("users", "device_token", {
      type: Sequelize.STRING,
    }),
      queryInterface.addColumn("safetyplans", "alert", {
        type: Sequelize.BOOLEAN,
      });
  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("device_token", "users");
    queryInterface.removeColumn("alert", "safetyplans");
  },
};
