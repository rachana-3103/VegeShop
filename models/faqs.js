module.exports = (sequelize, DataTypes) => {
  const faqs = sequelize.define("faqs", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: Sequelize.UUID,
      references: {
        model: "users",
        key: "id",
      },
      allowNull: false,
    },
    questions: {
      type: DataTypes.JSON,
    },
    count: {
      type: DataTypes.INTEGER,
    },
  });

  return faqs;
};
