const { locations } = require("../models/index");

exports.findAllLocation = async (userId) => {
  return await locations.findAll({
    where: {
      user_id: userId,
    },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
};

exports.findLocationById = async (userId, id) => {
  return await locations.findOne({
    where: {
      id,
      user_id: userId,
    },
  });
};

exports.findLocation = async (obj) => {
  return await locations.findOne({
    where: {
      name: obj.name,
      latitude: obj.latitude,
      longitude: obj.longitude,
      user_id: obj.user_id,
    },
  });
};

exports.updateLocations = async (obj) => {
  return await locations.update(obj, {
    where: {
      id: obj.id,
      user_id: obj.user_id,
    },
  });
};

exports.userLocationDelete = async (userId) => {
  return await locations.destroy({
    where: { user_id: userId },
    force: true,
  });
};
