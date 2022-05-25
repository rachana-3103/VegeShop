const { locations } = require("../models/index");

async function findAllLocation(userId) {
  return await locations.findAll({
    where: {
      user_id: userId,
    },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
}

async function findLocationById(userId, id) {
  return await locations.findOne({
    where: {
      id,
      user_id: userId,
    },
  });
}

async function findLocation(obj) {
  return await locations.findOne({
    where: {
      name: obj.name,
      latitude: obj.latitude,
      longitude: obj.longitude,
      user_id: obj.user_id,
    },
  });
}

async function deleteLocations(userId, id) {
  return await locations.destroy({
    where: {
      id,
      user_id: userId,
    },
    force: true,
  });
}

async function updateLocations(obj) {
  return await locations.update(obj, {
    where: {
      id: obj.id,
      user_id: obj.user_id,
    },
  });
}

module.exports = {
  findAllLocation,
  findLocationById,
  deleteLocations,
  updateLocations,
  findLocation,
};
