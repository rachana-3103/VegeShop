"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("safetyplans", "help_individuals", {
      type: Sequelize.JSON,
    }),
      queryInterface.addColumn("safetyplans", "checkinout_individuals", {
        type: Sequelize.JSON,
      }),
      queryInterface.removeColumn("safetyplans", "help", {
        type: Sequelize.JSON,
      }),
      queryInterface.removeColumn("safetyplans", "check_in_out", {
        type: Sequelize.JSON,
      }),
      queryInterface.addColumn("safetyplans", "help_group", {
        type: Sequelize.JSON,
      }),
      queryInterface.addColumn("safetyplans", "checkinout_group", {
        type: Sequelize.JSON,
      });
  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("safetyplans", "help_individuals");
    queryInterface.removeColumn("safetyplans", "checkinout_individuals");
    queryInterface.removeColumn("safetyplans", "help_group");
    queryInterface.removeColumn("safetyplans", "checkinout_group");
  },
};
