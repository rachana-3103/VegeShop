const { locationsharings } = require("../../models/index");

async function locationSharing(param) {
  try {
    const locationSharing = {
      user_id: param.user.id,
      sms_message: param.message,
      latitude: param.latitude,
      longitude: param.longitude,
      contacts: param.contacts,
      type: "static",
    };
    await locationsharings.create(locationSharing);

    return {
      err: false,
      data: null,
      msg: "Static Loction Sharing Successfully.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
}

module.exports = {
  locationSharing,
};
