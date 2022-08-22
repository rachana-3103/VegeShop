"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("locations", "is_favourite", {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });
  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("locations", "is_favourite");
  },
};
