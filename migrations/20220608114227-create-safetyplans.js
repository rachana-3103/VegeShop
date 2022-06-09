module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("safetyplans", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4(),
      },
      user_id: {
        type: Sequelize.UUID,
        references: {
          model: "users",
          key: "id",
        },
        allowNull: false,
      },
      location_id: {
        type: Sequelize.UUID,
        references: {
          model: "locations",
          key: "id",
        },
        allowNull: false,
      },
      cover_radius: {
        type: Sequelize.INTEGER,
      },
      person_name: {
        type: Sequelize.JSON,
      },
      start_time: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      end_time: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      help_group: {
        type: Sequelize.JSON,
      },
      checkinout_group: {
        type: Sequelize.JSON,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alert: {
        type: Sequelize.BOOLEAN,
      },
      help_individuals: {
        type: Sequelize.JSON,
      },
      checkinout_individuals: {
        type: Sequelize.JSON,
      },
      extend_plan: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
  down: (queryInterface) => {
    queryInterface.dropTable("safetyplans");
  },
};
