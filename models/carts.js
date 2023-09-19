module.exports = (sequelize, DataTypes) => {
  const carts = sequelize.define("carts", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    items:{
      type: DataTypes.JSON,
      allowNull: false,
    },
    delivery_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    payment: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    shipping: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    tax: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reason: {
      type: DataTypes.STRING,
    },
    cancel_description: {
      type: DataTypes.STRING,
    },
  });

  return carts;
};
