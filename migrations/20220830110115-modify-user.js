"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("users", "is_notification", {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    });
  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("users", "is_notification");
  },
};
