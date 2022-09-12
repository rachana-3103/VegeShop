module.exports = (sequelize, DataTypes) => {
  const manualhelps = sequelize.define("manualhelps", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    help_group: {
      type: DataTypes.JSON,
    },
    help_individuals: {
      type: DataTypes.JSON,
    },
    alert: {
      type: DataTypes.BOOLEAN,
      defaultValue:false
    },
  });

  return manualhelps;
};
