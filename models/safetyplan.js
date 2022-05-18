module.exports = (sequelize, DataTypes) => {
  const safetyplans = sequelize.define("safetyplans", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    location_id: {
      type: DataTypes.STRING,
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cover_radius: {
      type: DataTypes.INTEGER,
    },
    person_name: {
      type: DataTypes.JSON,
    },
    start_time: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    end_time: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    help: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    check_in_out: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  });

  return safetyplans;
};
