const { locationsharings } = require("../models/index");

async function userLocationSharingDelete(userId) {
  return await locationsharings.destroy({
    where: { user_id: userId },
    force: true,
  });
}

module.exports = {
  userLocationSharingDelete,
};
