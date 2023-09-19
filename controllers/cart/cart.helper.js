const Sequelize = require("sequelize");
const {
  PRODUCT_ALREADY_EXIST,
  ORDER_NOT_FOUND,
  CONTACT_PHONENUMBER_SAME,
  STATUS,
} = require("../../helpers/messages");
const {
  findOrderById,
  updateOrder,
  deleteGroups,
  updateGroups,
} = require("../../Dao/cart");
const { carts, users } = require("../../models/index");
const moment = require("moment");

async function addCart(param) {
  try {
    let totalPayment = 0;
    for (const obj of param.cart) {
      const itemPayment = Number(obj.price) * Number(obj.noOfItem);
      totalPayment += itemPayment;
    }
    const total = Number(totalPayment / 1.1).toFixed(2);
    const tax = Number(totalPayment - total).toFixed(2);
    const cartObj = {
      user_id: param.user.id,
      items: JSON.parse(JSON.stringify(param.cart)),
      delivery_time: param.deliveryTime,
      payment: Number(total),
      shipping: 10,
      tax: Number(tax),
      total: Number(total) + 10 + Number(tax),
      status: STATUS[1],
    };

    const data = await carts.create(cartObj);
    let response = await carts.findOne({
      where: {
        id: data.id,
      },
    });
    const user = await users.findOne({
      where: {
        id: data.user_id,
      },
    });
    response.items = JSON.parse(response.items);
    response.dataValues.location = user.dataValues.address;
    return {
      err: false,
      data: response,
      msg: "Order Placed Successfully.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
}

async function listOrder(req) {
  try {
    let order;
    let array = [];
    const currentTime = moment().format("DD/MM/YYYY HH:mm");
    if (req.query.view == "upcoming") {
      order = await carts.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      for (const obj of order) {
        if (obj.delivery_time > currentTime) {
          array.push(obj);
        }
        obj.items = JSON.parse(obj.items);
      }
      order = array;
    } else if (req.query.view == "past") {
      order = await carts.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      for (const obj of order) {
        if (obj.delivery_time < currentTime) {
          array.push(obj);
        }
        obj.items = JSON.parse(obj.items);
      }
      order = array;
    }
    else {
      order = await carts.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      for (const obj of order) {
        obj.items = JSON.parse(obj.items);
      }
    }

    return {
      err: false,
      data: order,
      msg: "Order List.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
}

async function getOrderDetails(param) {
  try {
    let order = await findOrderById(param.user.id, param.id);
    if (!order) {
        return {
          err: true,
          msg: ORDER_NOT_FOUND,
        };
      } 
    order.dataValues.items = JSON.parse(order.dataValues.items);
    return {
      err: false,
      data: order,
      msg: "Order Details.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
}

async function cancelOrder(param) {
  try {
    const order = await findOrderById(param.user.id, param.orderId);
    if (!order) {
      return {
        err: true,
        msg: ORDER_NOT_FOUND,
      };
    } else {
      await updateOrder(param.user.id, param.orderId, param.reason, param.description);
    }

    return {
      err: false,
      msg: "Order Cancelled Successfully.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
}

async function updateGroup(param) {
  try {
    const group = await findGroupById(param.user.id, param.groupId);
    if (!group) {
      return {
        err: true,
        msg: GROUP_NOT_FOUND,
      };
    }
    let contactArray = [];
    for (const obj of param.contacts) {
      const conatactPhoneNumber = await param.contacts.find(
        (objNo) =>
          objNo.phone_number == obj.phoneNumber &&
          objNo.country_code == obj.countryCode
      );
      if (conatactPhoneNumber) {
        return {
          err: true,
          msg: CONTACT_PHONENUMBER_SAME,
        };
      }
      obj.phone_number = obj.phoneNumber;
      obj.country_code = obj.countryCode;

      delete obj.phoneNumber;
      delete obj.countryCode;
      contactArray.push(obj);
    }

    await updateGroups(param.user.id, param.groupId, contactArray, param.name);

    return {
      err: false,
      msg: "Group updated Successfully.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
}

module.exports = {
  addCart,
  listOrder,
  getOrderDetails,
  cancelOrder,
  updateGroup,
};
