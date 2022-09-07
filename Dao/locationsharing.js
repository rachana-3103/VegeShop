const { locationsharings } = require("../models/index");

exports.userLocationSharingDelete = async (userId) => {
  return await locationsharings.destroy({
    where: { user_id: userId },
    force: true,
  });
};

exports.findLiveLocation = async (userId) => {
  return await locationsharings.findOne({
    where: {
      user_id: userId,
      type: "live",
      status: "SHARED",
    },
    attributes: {
      exclude: ["password", "sms_code"],
    },
  });
};

exports.updateStatus = async (status, userId, type) => {
  return await locationsharings.update(
    { status },
    {
      where: {
        user_id: userId,
        type,
      },
    }
  );
};
