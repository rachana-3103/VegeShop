
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country_code: {
        type: DataTypes.STRING,
        allowNull: false,
      }, 
      phone_number: {
        type: DataTypes.NUMBER,
        allowNull: false,
      }, 
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sms_code: {
        type: DataTypes.STRING,
      },
      sms_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
    },
    );

  return users;
};