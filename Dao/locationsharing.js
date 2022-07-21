const { locationsharings } = require("../models/index");

exports.userLocationSharingDelete = async (userId) => {
  return await locationsharings.destroy({
    where: { user_id: userId },
    force: true,
  })
};
