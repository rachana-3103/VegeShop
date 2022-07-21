const { groups } = require("../models/index");

exports.findGroupByName = async (userId, name) => {
  return await groups.findOne({
    where: {
      name,
      user_id: userId,
    },
  });
};

exports.findGroupById = async (userId, id) => {
  return await groups.findOne({
    where: {
      id,
      user_id: userId,
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

