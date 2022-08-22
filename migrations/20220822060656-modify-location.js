"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("locations", "is_favourite", {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });
    queryInterface.addColumn("locations", "more_address", {
      type: Sequelize.STRING,
    });
  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("locations", "is_favourite");
    queryInterface.removeColumn("locations", "more_address");
  },
};
