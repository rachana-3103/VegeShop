const { locationsharings } = require("../../models/index");
const axios = require("axios");
const uuid = require("uuid");
const AWS = require("aws-sdk");
const { findLiveLocation , updateStatus } = require("../../Dao/locationsharing");
const { LOCATION_NOT_FOUND } = require("../../helpers/messages");
const { updateBattery, findUserById } = require("../../Dao/user");
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
});
const sns = new AWS.SNS();

exports.locationSharing = async (param) => {
  try {
    let obj = {};
    let msg;
    const user = await findUserById(param.user.id);

    let locationSharing = {
      user_id: param.user.id,
      current_latitude: param.currentLatitude,
      current_longitude: param.currentLongitude,
      contacts: param.contacts,
      status: "SHARED",
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
          domainUriPrefix: "https://link.aegis-247.com",
          link: `https://location.aegis-247.com/?lat=${param.currentLatitude}&long=${param.currentLongitude}&type=static&userId=${param.user.id}`,
          // androidInfo: {
          //   androidPackageName: process.env.ANDROID_PACKAGE_NAME,
          // },
          // iosInfo: {
          //   iosBundleId: process.env.IOS_PACKAGE_NAME,
          // },
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
      msg = "Static Location Sharing Successfully.";
      for (const contact of param.contacts) {
        const mobile = "+" + Number(contact.countryCode) + contact.phoneNumber;
        let sendSMS = {
          Subject: "Aegis247 For Help",
          Message: `${user.name} shared a static location with you.\r\n\r\nSee here. ${obj.link}\r\n\r\nAEGIS247`,
          PhoneNumber: mobile,
          MessageAttributes: {
            "AWS.MM.SMS.OriginationNumber": {
              DataType: "String",
              StringValue: process.env.TEN_DLC,
            },
          },
        };

        sns.publish(sendSMS, (err, result) => {
          if (err) {
            console.info(err);
          } else {
            console.info(result);
          }
        });
      }
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
          domainUriPrefix: "https://link.aegis-247.com",
          link: `https://location.aegis-247.com/?lat=${param.currentLatitude}&long=${param.currentLongitude}&dlat=${param.destinationLatitude}&dlong=${param.destinationLongitude}&type=live&uniqueId=${uniqueId}&userId=${param.user.id}`,
          // androidInfo: {
          //   androidPackageName: process.env.ANDROID_PACKAGE_NAME,
          // },
          // iosInfo: {
          //   iosBundleId: process.env.IOS_PACKAGE_NAME,
          // },
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
      msg = "Live Location Sharing Successfully.";
      obj.uniqueID = uniqueId;
      for (const contact of param.contacts) {
        const mobile = "+" + Number(contact.countryCode) + contact.phoneNumber;
        let sendSMS = {
          Subject: "Aegis247 For Help",
          Message: `${user.name} has shared their live location and end destination with you.\r\n\r\nView here. ${obj.link}\r\n\r\nAEGIS247`,
          PhoneNumber: mobile,
          MessageAttributes: {
            "AWS.MM.SMS.OriginationNumber": {
              DataType: "String",
              StringValue: process.env.TEN_DLC,
            },
          },
        };

        sns.publish(sendSMS, (err, result) => {
          if (err) {
            console.info(err);
          } else {
            console.info(result);
          }
        });
      }
    }
    await updateBattery(param.user.id, param.battery, param.altitude);
    await locationsharings.create(locationSharing);

    return {
      err: false,
      data: obj,
      msg,
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
};

exports.status = async (param) => {
  try {
    let msg;
    const user = await findUserById(param.user.id);
    const location = await findLiveLocation(param.user.id);
    if (!location) {
      return {
        err: true,
        msg: LOCATION_NOT_FOUND,
      };
    }

    if (param.status == "Stop") {
      await updateStatus("CANCELLED", param.user.id, "live");
      msg = "status has been cancelled.";
    }

    if (param.status == "Arrived") {
      await updateStatus("STOPPED", param.user.id, "live");
      msg = "status has been stopped.";
    }

    console.log('location.contacts', location.contacts)
    let sendSMS;
    for (const contact of location.contacts) {

      const mobile = "+" + Number(contact.countryCode) + contact.phoneNumber;
      if (param.status == "Stop") {
         sendSMS = {
          Subject: "Aegis247 For Help",
          Message: `${user.name} has cancelled their live location sharing prior to arriving at their location.\r\n\r\nAEGIS247`,
          PhoneNumber: mobile,
          MessageAttributes: {
            "AWS.MM.SMS.OriginationNumber": {
              DataType: "String",
              StringValue: process.env.TEN_DLC,
              // StringValue: 'Promotional'
            },
          },
        };
      }
      
      if (param.status == "Arrived") {
        sendSMS = {
          Subject: "Aegis247 For Help",
          Message: `${user.name} has arrived at their destination. Live location sharing stopped.\r\n\r\nAEGIS247`,
          PhoneNumber: mobile,
          MessageAttributes: {
            "AWS.MM.SMS.OriginationNumber": {
              DataType: "String",
              StringValue: process.env.TEN_DLC,
            },
          },
        };
      }

      sns.publish(sendSMS, (err, result) => {
        if (err) {
          console.info(err);
        } else {
          console.info(result);
        }
      });
    }

    return {
      err: false,
      msg,
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
};
