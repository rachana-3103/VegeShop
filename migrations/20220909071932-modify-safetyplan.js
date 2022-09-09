"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn("safetyplans", "start_time", {
      type: Sequelize.STRING,
      allowNull: true,
    }),
      queryInterface.changeColumn("safetyplans", "end_time", {
        type: Sequelize.STRING,
        allowNull: true,
      });
  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn("safetyplans", "start_time");
    queryInterface.changeColumn("safetyplans", "end_time");
  },
};
