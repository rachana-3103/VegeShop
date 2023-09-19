const { products } = require("../models/index");


exports.findProductByName = async (name) => {
  return await products.findOne({
    where: {
      name,
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

exports.updateGroups = async (userId, id, contacts, name) => {
  return await groups.update(
    {
      contacts,
      name,
      no_of_contact: contacts.length,
    },
    {
      where: {
        id,
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

