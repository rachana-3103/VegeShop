module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("manualhelps", {
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
      latitude: {
        type: Sequelize.STRING,
      },
      longitude: {
        type: Sequelize.STRING,
      },
      help_group: {
        type: Sequelize.JSON,
      },
      help_individuals: {
        type: Sequelize.JSON,
      },
      alert: {
        type: Sequelize.BOOLEAN,
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
    queryInterface.dropTable("manualhelps");
  },
};
