module.exports = (sequelize, DataTypes) => {
  const faqs = sequelize.define("faqs", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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
