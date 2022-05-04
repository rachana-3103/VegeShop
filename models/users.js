const crypto = require('crypto');

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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
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
    {
      hooks: {
        beforeCreate(user) {
          if (user.changed('password')) {
            user.password = crypto
              .createHash('md5')
              .update(user.password || '')
              .digest('hex');
          }
        },
        beforeUpdate(user) {
          if (user.changed('password')) {
            user.password = crypto
              .createHash('md5')
              .update(user.password || '')
              .digest('hex');
          }
        },
      },
    },
    {
      defaultScope: {
        attributes: { exclude: ['password'] },
      },
      scopes: {
        withSecretColumns: {
          attributes: { include: ['password'] },
        },
      },
    });

  users.associate = () => {
  };

  return users;
};
