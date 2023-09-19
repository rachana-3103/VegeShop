const { carts } = require("../models/index");
const {
  STATUS
} = require("../helpers/messages");

exports.findOrderById = async (userId, id) => {
  return await carts.findOne({
    where: {
      user_id:userId,
      id
    },
  });
};

exports.findProductById = async (id) => {
  return await products.findOne({
    where: {
      id,
    },
  });
};

exports.deleteGroups = async (userId, id) => {
  return await groups.destroy({
    where: { id, user_id: userId },
    force: true,
  });
};

exports.updateOrder = async (userId, orderId, reason, description) => {
  return await carts.update(
    {
      status:STATUS[5],
      reason,
      cancel_description:description
    },
    {
      where: {
        id:orderId,
        user_id: userId,
      },
    }
  );
};

exports.userGroupDelete = async (userId) => {
  return await groups.destroy({
    where: { user_id: userId },
    force: true,
  });
};

