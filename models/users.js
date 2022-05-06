const crypto = require('crypto');

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      surname: {
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
      confirm_password: {
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
      reset_token: {
        type: DataTypes.STRING
      },
      auth_token: {
        type: DataTypes.STRING
      },
      token_expired: {
        type: DataTypes.DATE
      }
    },
    // {
    //   defaultScope: {
    //     attributes: { exclude: ['password' , 'confirm_password'] },
    //   },
    //   scopes: {
    //     withSecretColumns: {
    //       attributes: { include: ['password' , 'confirm_password'] },
    //     },
    //   },
    // }
    );

  users.associate = () => {
  };

  return users;
};