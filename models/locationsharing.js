module.exports = (sequelize, DataTypes) => {
  const locationsharings = sequelize.define("locationsharings", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    current_latitude: {
      type: DataTypes.STRING,
    },
    current_longitude: {
      type: DataTypes.STRING,
    },
    destination_latitude: {
      type: DataTypes.STRING,
    },
    destination_longitude: {
      type: DataTypes.STRING,
    },
    sms_message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contacts: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  });

  return locationsharings;
};
