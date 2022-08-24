const { locationsharings } = require("../../models/index");
const axios = require("axios");
const uuid = require("uuid");
exports.locationSharing = async (param) => {
  try {
    let msg;
    let linkShare;
    let locationSharing = {
      user_id: param.user.id,
      current_latitude: param.currentLatitude,
      current_longitude: param.currentLongitude,
      contacts: param.contacts,
    };
    if (
      !param.destinationLatitude &&
      param.currentLatitude &&
      param.currentLongitude
    ) {
      Object.assign(locationSharing, {
        type: "static",
      });
      const data = JSON.stringify({
        dynamicLinkInfo: {
          domainUriPrefix: "https://ages.page.link",
          link: `https://www.example.com/?lat=${param.currentLatitude}&long=${
            param.currentLongitude
          }&type=static&uniqueId=${uuid.v4()}`,
          androidInfo: {
            androidPackageName: process.env.ANDROID_PACKAGE_NAME,
          },
          iosInfo: {
            iosBundleId: process.env.IOS_PACKAGE_NAME,
          },
        },
      });
      const config = {
        method: "POST",
        url: `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${process.env.KEY}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      linkShare = await axios(config);
      msg = "Static Loction Sharing Successfully.";
    } else if (
      param.currentLatitude &&
      param.currentLongitude &&
      param.destinationLatitude &&
      param.destinationLongitude
    ) {
      Object.assign(locationSharing, {
        type: "live",
        destination_latitude: param.destinationLatitude,
        destination_longitude: param.destinationLatitude,
      });
      const data = JSON.stringify({
        dynamicLinkInfo: {
          domainUriPrefix: "https://ages.page.link",
          link: `https://www.example.com/?clat=${param.currentLatitude}&clong=${
            param.currentLongitude
          }&dlat=${param.destinationLatitude}&dlong=${
            param.destinationLongitude
          }&type=live&uniqueId=${uuid.v4()}`,
          androidInfo: {
            androidPackageName: process.env.ANDROID_PACKAGE_NAME,
          },
          iosInfo: {
            iosBundleId: process.env.IOS_PACKAGE_NAME,
          },
        },
      });
      const config = {
        method: "POST",
        url: `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${process.env.KEY}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      linkShare = await axios(config);
      msg = "Live Loction Sharing Successfully.";
    }

    await locationsharings.create(locationSharing);
    return {
      err: false,
      data: {
        link: linkShare.data.shortLink,
        uniqueID: uuid.v4(),
      },
      msg,
    };
  } catch (error) {
    console.log("~ error", error);
    return {
      err: true,
      msg: error.message,
    };
  }
};
