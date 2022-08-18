"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("safetyplans", "location_id", {
      type: Sequelize.STRING,
      allowNull: true,
    }),
      queryInterface.addColumn("locationsharings", "current_latitude", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn("locationsharings", "current_longitude", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn("locationsharings", "destination_latitude", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn("locationsharings", "destination_longitude", {
        type: Sequelize.STRING,
      }),
      queryInterface.removeColumn("locationsharings", "latitude", {
        type: Sequelize.STRING,
      }),
      queryInterface.removeColumn("locationsharings", "longitude", {
        type: Sequelize.STRING,
      });
  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("safetyplans", "location_id");
    queryInterface.addColumn("locationsharings", "current_latitude");
    queryInterface.addColumn("locationsharings", "current_longitude");
    queryInterface.addColumn("locationsharings", "destination_latitude");
    queryInterface.addColumn("locationsharings", "destination_longitude");
    queryInterface.removeColumn("locationsharings", "latitude");
    queryInterface.removeColumn("locationsharings", "longitude");
  },
};
