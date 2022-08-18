const { locationsharings } = require("../../models/index");

exports.locationSharing = async (param) => {
  try {
    let locationSharing;
    let msg;
    if (
      !param.destinationLatitude &&
      param.currentLatitude &&
      param.currentLongitude
    ) {
      locationSharing = {
        user_id: param.user.id,
        sms_message: param.message,
        current_latitude: param.currentLatitude,
        current_longitude: param.currentLongitude,
        contacts: param.contacts,
        type: "static",
      };
      msg = "Static Loction Sharing Successfully.";
    } else if (
      param.currentLatitude &&
      param.currentLongitude &&
      param.destinationLatitude &&
      param.destinationLongitude
    ) {
      locationSharing = {
        user_id: param.user.id,
        sms_message: param.message,
        current_latitude: param.currentLatitude,
        current_longitude: param.currentLongitude,
        destination_latitude: param.destinationLatitude,
        destination_longitude: param.destinationLatitude,
        contacts: param.contacts,
        type: "live",
      };
      msg = "Live Loction Sharing Successfully.";
    }

    await locationsharings.create(locationSharing);

    return {
      err: false,
      data: null,
      msg,
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
};
