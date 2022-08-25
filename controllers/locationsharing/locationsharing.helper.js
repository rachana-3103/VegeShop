const { locationsharings } = require("../../models/index");
const axios = require("axios");
const uuid = require("uuid");
exports.locationSharing = async (param) => {
  try {
    let obj = {};
    let msg;
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
          link: `https://www.example.com/?lat=${param.currentLatitude}&long=${param.currentLongitude}&type=static`,
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
      obj.link = linkShare.data.shortLink;
      msg = "Static Loction Sharing Successfully.";
    } else if (
      param.currentLatitude &&
      param.currentLongitude &&
      param.destinationLatitude &&
      param.destinationLongitude
    ) {
      const uniqueId = uuid.v4();
      Object.assign(locationSharing, {
        type: "live",
        destination_latitude: param.destinationLatitude,
        destination_longitude: param.destinationLatitude,
      });
      const data = JSON.stringify({
        dynamicLinkInfo: {
          domainUriPrefix: "https://ages.page.link",
          link: `https://www.example.com/?clat=${param.currentLatitude}&clong=${param.currentLongitude}&dlat=${param.destinationLatitude}&dlong=${param.destinationLongitude}&type=live&uniqueId=${uniqueId}`,
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
      obj.link = linkShare.data.shortLink;
      msg = "Live Loction Sharing Successfully.";
      obj.uniqueID = uniqueId;
    }

    await locationsharings.create(locationSharing);

    // let sendSMS = {
    //   Subject: "Aegis24/7 For Help",
    //   Message: `Your Aegies link is: ${obj.link}`,
    //   PhoneNumber: number,
    // };

    // sns.publish(sendSMS, (err, result) => {
    //   if (err) {
    //     console.info(err);
    //   } else {
    //     console.info(result);
    //   }
    // });
    return {
      err: false,
      data: obj,
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
