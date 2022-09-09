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
    location_id: {
      type: DataTypes.STRING,
    },
    cover_radius: {
      type: DataTypes.INTEGER,
    },
    person_name: {
      type: DataTypes.JSON,
    },
    start_time: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    end_time: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    help_group: {
      type: DataTypes.JSON,
    },
    checkinout_group: {
      type: DataTypes.JSON,
    },
    help_individuals: {
      type: DataTypes.JSON,
    },
    checkinout_individuals: {
      type: DataTypes.JSON,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alert: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    extend_plan: {
      type: DataTypes.INTEGER,
    },
  });

  return safetyplans;
};
