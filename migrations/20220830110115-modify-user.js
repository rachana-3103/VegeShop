"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("users", "notification", {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    }),
      queryInterface.addColumn("locationsharings", "status", {
        type: Sequelize.STRING,
      });
  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("users", "notification");
    queryInterface.removeColumn("locationsharings", "status");
  },
};
