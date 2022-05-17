const { groups } = require("../models/index");

async function findGroupByName(userId, name) {
  return await groups.findOne({
    where: {
      name,
      user_id: userId,
    },
  });
}

async function findGroupById(userId, id) {
  return await groups.findOne({
    where: {
      id,
      user_id: userId,
    },
  });
}

async function deleteGroups(userId, id) {
  return await groups.destroy({
    where: { id, user_id: userId },
    force: true,
  });
}

async function updateGroups(userId, id, contacts, name) {
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
}

module.exports = {
  findGroupByName,
  findGroupById,
  deleteGroups,
  updateGroups,
};
