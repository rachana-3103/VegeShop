const { safetyplans, locations, manualhelps } = require("../../models/index");
const {
  SAFETYPLAN_NOT_FOUND,
  SAFETYPLAN_ALREADY_EXIST,
  STATUS,
  GROUP_NOT_FOUND_CHECKOUT,
  MANUALHELP_NOT_FOUND,
  GROUP_NOT_FOUND_HELP,
  LOCATION_NOT_FOUND,
  NOTIFIED_CONTACT,
  NO_MORE_EXTEND,
} = require("../../helpers/messages");
const {
  findSafetyPlan,
  updateStatus,
  updateSafetyplan,
  updateAlert,
  findSafetyPlanAlert,
  updateExtend,
} = require("../../Dao/safetyplan");
const axios = require("axios");
const uuid = require("uuid");
const { findGroupById } = require("../../Dao/group");
const { updateBattery, findUserById } = require("../../Dao/user");
const {
  updateLocations,
  findLocation,
  findLocationById,
} = require("../../Dao/location");
const AWS = require("aws-sdk");
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
});
const sns = new AWS.SNS();
const moment = require("moment");

exports.addSafetyPlan = async (param) => {
  try {
    let location;
    for (const id of param.helpGroup) {
      const data = await findGroupById(param.user.id, id);
      if (!data) {
        return {
          err: true,
          msg: GROUP_NOT_FOUND_HELP + id,
        };
      }
    }

    for (const id of param.checkInOutGroup) {
      const data = await findGroupById(param.user.id, id);
      if (!data) {
        return {
          err: true,
          msg: GROUP_NOT_FOUND_CHECKOUT + id,
        };
      }
    }

    const safetyplan = await findSafetyPlan(param.user.id);
    if (safetyplan) {
      return {
        err: true,
        msg: SAFETYPLAN_ALREADY_EXIST,
      };
    }
    const locationObj = {
      user_id: param.user.id,
      latitude: param.latitude,
      longitude: param.longitude,
      name: param.name,
      address: param.address,
      more_address: param.moreAddress,
    };
    location = await findLocation(locationObj);
    if (!location) {
      location = await locations.create(locationObj);
    } else {
      Object.assign(locationObj, {
        id: location.id,
      });
      await updateLocations(locationObj);
    }

    const helpIndi = [];
    for (const obj of param.helpIndividuals) {
      obj.phone_number = obj.phoneNumber;
      obj.country_code = obj.countryCode;
      delete obj.phoneNumber;
      delete obj.countryCode;
      helpIndi.push(obj);
    }
    const checkInOutIndi = [];
    for (const obj of param.checkInOutIndividuals) {
      obj.phone_number = obj.phoneNumber;
      obj.country_code = obj.countryCode;
      delete obj.phoneNumber;
      delete obj.countryCode;
      checkInOutIndi.push(obj);
    }

    const safetyPlanObj = {
      user_id: param.user.id,
      location_id: location.dataValues.id,
      cover_radius: param.coverRadius,
      person_name: param.personName,
      start_time: moment(param.startTime).format("YYYY-MM-DDTHH:mm"),
      end_time: moment(param.endTime).format("YYYY-MM-DDTHH:mm"),
      help_individuals: helpIndi,
      checkinout_individuals: checkInOutIndi,
      help_group: param.helpGroup,
      checkinout_group: param.checkInOutGroup,
      status: STATUS.INPROGRESS,
    };

    await safetyplans.create(safetyPlanObj);

    return {
      err: false,
      data: null,
      msg: "Safety plan added.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
};

exports.updateSafetyPlan = async (param) => {
  try {
    const safetyplan = await findSafetyPlan(param.user.id);
    if (!safetyplan) {
      return {
        err: true,
        msg: SAFETYPLAN_NOT_FOUND,
      };
    }

    const location = await findLocationById(
      safetyplan.dataValues.user_id,
      safetyplan.dataValues.locationId
    );

    if (!location) {
      return {
        err: true,
        msg: LOCATION_NOT_FOUND,
      };
    }
    const locationObj = {
      id: location.dataValues.id,
      user_id: param.user.id,
      latitude: param.latitude,
      longitude: param.longitude,
      name: param.name,
      address: param.address,
      more_address: moreAddress,
    };
    await updateLocations(locationObj);

    const helpIndi = [];
    const checkInOutIndi = [];

    for (const obj of param.helpIndividuals) {
      obj.phone_number = obj.phoneNumber;
      obj.country_code = obj.countryCode;
      delete obj.phoneNumber;
      delete obj.countryCode;
      helpIndi.push(obj);
    }
    for (const obj of param.checkInOutIndividuals) {
      obj.phone_number = obj.phoneNumber;
      obj.country_code = obj.countryCode;
      delete obj.phoneNumber;
      delete obj.countryCode;
      checkInOutIndi.push(obj);
    }

    const safetyPlanObj = {
      location_id: location.dataValues.id,
      cover_radius: param.coverRadius,
      person_name: param.personName,
      start_time: moment(param.startTime).format("YYYY-MM-DDTHH:mm"),
      end_time: moment(param.endTime).format("YYYY-MM-DDTHH:mm"),
      help_individuals: helpIndi,
      checkinout_individuals: checkInOutIndi,
      help_group: param.helpGroup,
      checkinout_group: param.checkInOutGroup,
    };

    await updateSafetyplan(safetyPlanObj, param.user.id);
    return {
      err: false,
      data: null,
      msg: "SafetyPlan updated Successfully.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
};

exports.extend = async (param) => {
  try {
    let safetyplan = await findSafetyPlan(param.user.id);

    if (!safetyplan) {
      return {
        err: true,
        msg: SAFETYPLAN_NOT_FOUND,
      };
    }

    if (safetyplan.dataValues.extend_plan == 3) {
      return {
        err: true,
        msg: NO_MORE_EXTEND,
      };
    }

    if (safetyplan.dataValues && !safetyplan.dataValues.extend_plan) {
      safetyplan.dataValues.extend_plan = 1;
    } else {
      safetyplan.dataValues.extend_plan += 1;
    }

    await updateExtend(
      param.user.id,
      param.time,
      safetyplan.dataValues.extend_plan,
      safetyplan.dataValues.end_time
    );

    return {
      err: false,
      data: null,
      msg: "SafetyPlan extend Successfully.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
};

exports.cancelSafetyPlan = async (param) => {
  try {
    const safetyplan = await findSafetyPlan(param.user.id);

    if (!safetyplan) {
      return {
        err: true,
        msg: SAFETYPLAN_NOT_FOUND,
      };
    }
    await updateStatus(STATUS.CANCELLED, param.user.id);
    return {
      err: false,
      data: null,
      msg: "Cancelled safety plan.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
};

exports.completeSafetyPlan = async (param) => {
  try {
    const safetyplan = await findSafetyPlan(param.user.id);

    if (!safetyplan) {
      return {
        err: true,
        msg: SAFETYPLAN_NOT_FOUND,
      };
    }
    let number;
    let array = [];
    // for (const id of safetyplan.dataValues.help_group) {
    //   const group = await findGroupById(safetyplan.dataValues.user_id, id);
    //   array = [...group.contacts];
    // }
    // for (const element of safetyplan.dataValues.help_individuals) {
    //   if (
    //     !array.some(
    //       (objData) =>
    //         objData.phone_number == element.phone_number &&
    //         objData.country_code == element.country_code
    //     )
    //   ) {
    //     array.push(element);
    //   }
    // }
    for (const id of safetyplan.dataValues.checkinout_group) {
      const group = await findGroupById(safetyplan.dataValues.user_id, id);
      array = [...group.contacts];
    }
    for (const element of safetyplan.dataValues.checkinout_individuals) {
      if (
        !array.some(
          (objData) =>
            objData.phone_number == element.phone_number &&
            objData.country_code == element.country_code
        )
      ) {
        array.push(element);
      }
    }
    if (param.isCompleted) {
      const ids = array.map((o) => o.phone_number);
      const filtered = array.filter(
        ({ phone_number }, index) => !ids.includes(phone_number, index + 1)
      );
      for (const obj of filtered) {
        number = obj.country_code + obj.phone_number;
        sendSMS = {
          Subject: "Aegis247 alert for complete safety plan",
          Message: `${param.user.name} has completed their Aegis 24/7 safety plan and chosen to remain at the loaction.\r\n\r\nFor more contact ${param.user.name} ${param.user.country_code}${param.user.phone_number}.\r\n\r\nAEGIS247`,
          PhoneNumber: number,
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

    await updateStatus(STATUS.COMPLETED, param.user.id);

    return {
      err: false,
      data: null,
      msg: "Completed safety plan.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
};

exports.getSafetyPlan = async (param) => {
  try {
    let obj = {};
    let msg;
    const manualHelp = await manualhelps.findOne({
      where: {
        user_id: param.user.id,
        alert: true,
      },
    });

    if (manualHelp) {
      manualHelp.dataValues.type = "manual";
      obj = manualHelp;
      msg = "Manual help Details";
    } else {
      const safetyplan = await findSafetyPlan(param.user.id);
      if (safetyplan) {
        const location = await findLocationById(
          param.user.id,
          safetyplan.location_id
        );
        safetyplan.dataValues.type = "safetyplan";
        safetyplan.dataValues.location = location.dataValues;
        obj = safetyplan;
        msg = "Safetyplan Details";
      } else {
        obj = null;
      }
    }

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

exports.getSafetyPlanDetails = async (param) => {
  try {
    let safetyplan = await findSafetyPlan(param.userId);
    let user = {};
    if (safetyplan) {
      const location = await findLocationById(
        param.userId,
        safetyplan.dataValues.location_id
      );
      const user = await findUserById(safetyplan.dataValues.user_id);
      Object.assign(safetyplan.dataValues, {
        name: user.dataValues.name,
        cell: user.dataValues.country_code + user.dataValues.phone_number,
        location: location.dataValues.address,
        more: location.dataValues.more_address,
        altitude: user.dataValues.altitude || "",
        battery: user.dataValues.battery || "",
        contacts:
          safetyplan.dataValues.help_individuals.length +
          safetyplan.dataValues.help_group.length,
      });
      delete safetyplan.dataValues.help_group;
      delete safetyplan.dataValues.help_individuals;
      delete safetyplan.dataValues.checkinout_group;
      delete safetyplan.dataValues.checkinout_individuals;
      return {
        err: false,
        data: safetyplan,
        msg: "Safetyplan Details",
      };
    } else {
      const findManualHelp = await manualhelps.findOne({
        where: {
          user_id: param.userId,
          alert: true,
        },
      });

      if (findManualHelp) {
        const user = await findUserById(findManualHelp.dataValues.user_id);
        Object.assign(findManualHelp.dataValues, {
          name: user.dataValues.name,
          cell: user.dataValues.country_code + user.dataValues.phone_number,
          location: "",
          more: "",
          altitude: user.dataValues.altitude || "",
          battery: user.dataValues.battery || "",
          contacts:
            findManualHelp.dataValues.help_individuals.length +
            findManualHelp.dataValues.help_group.length,
        });
        return {
          err: false,
          data: findManualHelp,
          msg: "Manual Help Details",
        };
      } else {
        const user = await findUserById(param.userId);
        return {
          err: false,
          data: user,
          msg: "User Details",
        };
      }
    }
  } catch (error) {
    console.log("~ error", error);
    return {
      err: true,
      msg: error.message,
    };
  }
};

exports.alertSafetyPlan = async (param) => {
  try {
    let obj = {};
    let msg;
    const uniqueId = uuid.v4();
    let data = JSON.stringify({
      dynamicLinkInfo: {
        domainUriPrefix: "https://link.aegis-247.com",
        link: `https://location.aegis-247.com/?lat=${param.latitude}&long=${param.longitude}&type=help&uniqueId=${uniqueId}`,
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
    const linkShare = await axios(config);
    obj.link = linkShare.data.shortLink;
    obj.uniqueID = uniqueId;

    if (param.type == "manual") {
      const helpArray = [];
      for (const id of param.helpGroup) {
        const data = await findGroupById(param.user.id, id);
        if (!data) {
          return {
            err: true,
            msg: GROUP_NOT_FOUND_HELP + id,
          };
        }
        for (const obj of data.contacts) {
          helpArray.push(obj);
        }
      }

      for (const obj of param.helpIndividuals) {
        obj.phone_number = obj.phoneNumber;
        obj.country_code = obj.countryCode;
        delete obj.phoneNumber;
        delete obj.countryCode;
        helpArray.push(obj);
      }
      const manualHelpObj = {
        user_id: param.user.id,
        latitude: param.latitude,
        longitude: param.longitude,
        help_group: param.helpGroup,
        help_individuals: param.helpIndividuals,
        alert: true,
      };
      const findManualHelp = await manualhelps.findOne({
        where: {
          user_id: param.user.id,
        },
      });

      if (!findManualHelp) {
        await manualhelps.create(manualHelpObj);
      }
      await updateBattery(param.user.id, param.battery, param.altitude);
      for (const contact of helpArray) {
        let number = contact.country_code + contact.phone_number;
        sendSMS = {
          Subject: "Aegis247 alert for help",
          Message: `${param.user.name} has activated the help button in their AEGIS247 mobile safety app.\r\n\r\nContact this person now.\r\n\r\nView their live location. ${obj.link}\r\n\r\n AEGIS247`,
          PhoneNumber: number,
          MessageAttributes: {
            "AWS.MM.SMS.OriginationNumber": {
              DataType: "String",
              StringValue: process.env.TEN_DLC,
            },
          },
        };

        sns.publish(sendSMS, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });
      }
      msg = "Manual live location share.";
    }
    if (param.type == "safetyplan") {
      const safetyplan = await findSafetyPlan(param.user.id);
      const safetyplanAlert = await findSafetyPlanAlert(param.user.id);
      if (!safetyplan) {
        return {
          err: true,
          msg: SAFETYPLAN_NOT_FOUND,
        };
      }
      if (!safetyplanAlert) {
        return {
          err: true,
          msg: NOTIFIED_CONTACT,
        };
      }
      let helpArray = [];
      let number;
      for (const id of safetyplan.dataValues.help_group) {
        const group = await findGroupById(safetyplan.dataValues.user_id, id);
        helpArray = [...group.contacts];
      }
      for (const element of safetyplan.dataValues.help_individuals) {
        if (
          !helpArray.some(
            (objData) =>
              objData.phone_number == element.phone_number &&
              objData.country_code == element.country_code
          )
        ) {
          helpArray.push(element);
        }
      }
      await updateBattery(param.user.id, param.battery, param.altitude);
      for (const objHelp of helpArray) {
        number = objHelp.country_code + objHelp.phone_number;
        sendSMS = {
          Subject: "Aegis247 alert for help",
          Message: `${param.user.name} has activated the help button on their AEGIS247 mobile safety app.\r\n\r\nView their live location. ${obj.link}\r\n\r\nContact this person now.\r\n\r\nAEGIS247`,
          PhoneNumber: number,
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
    await updateAlert(param.user.id);
    msg = "Safetyplan live location share.";
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

exports.responded = async (param) => {
  try {
    let helpArray = [];
    if (param.safetyplan) {
      const safetyplan = await findSafetyPlan(param.user.id);
      for (const id of safetyplan.dataValues.help_group) {
        const group = await findGroupById(safetyplan.dataValues.user_id, id);
        helpArray = [...group.contacts];
      }
      for (const element of safetyplan.dataValues.help_individuals) {
        if (
          !helpArray.some(
            (objData) =>
              objData.phone_number == element.phone_number &&
              objData.country_code == element.country_code
          )
        ) {
          helpArray.push(element);
        }
      }
      for (const objHelp of helpArray) {
        number = objHelp.country_code + objHelp.phone_number;
        sendSMS = {
          Subject: "Aegis247 alert for help",
          Message: `Update. ${param.user.name} messaged for Help.\r\n\r\nAt least one contact has replied.\r\n\r\nIf you still want to contact ${param.user.name} you can.\r\n\r\nAEGIS247`,
          PhoneNumber: number,
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

    if (!param.safetyplan) {
      const findManualHelp = await manualhelps.findOne({
        where: {
          user_id: param.user.id,
        },
      });
      if (!findManualHelp) {
        return {
          err: true,
          msg: MANUALHELP_NOT_FOUND,
        };
      }
      for (const id of findManualHelp.help_group) {
        const data = await findGroupById(param.user.id, id);
        for (const obj of data.contacts) {
          helpArray.push(obj);
        }
      }
      for (const obj of findManualHelp.help_individuals) {
        helpArray.push(obj);
      }
      for (const contact of helpArray) {
        let number = contact.country_code + contact.phone_number;
        sendSMS = {
          Subject: "Aegis247 alert for help",
          Message: `Update. ${param.user.name} messaged for Help.\r\n\r\nAt least one contact has replied.\r\n\r\nIf you still want to contact ${param.user.name} you can.\r\n\r\nAEGIS247`,
          PhoneNumber: number,
          MessageAttributes: {
            "AWS.MM.SMS.OriginationNumber": {
              DataType: "String",
              StringValue: process.env.TEN_DLC,
            },
          },
        };
        sns.publish(sendSMS, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });
      }
    }
    return {
      err: false,
      data: null,
      msg: "Live location share.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
};

exports.okay = async (param) => {
  try {
    let helpArray = [];
    if (param.safetyplan) {
      const safetyplan = await findSafetyPlan(param.user.id);
      if (!safetyplan) {
        return {
          err: true,
          msg: SAFETYPLAN_NOT_FOUND,
        };
      }

      for (const id of safetyplan.dataValues.help_group) {
        const group = await findGroupById(safetyplan.dataValues.user_id, id);
        helpArray = [...group.contacts];
      }
      for (const element of safetyplan.dataValues.help_individuals) {
        if (
          !helpArray.some(
            (objData) =>
              objData.phone_number == element.phone_number &&
              objData.country_code == element.country_code
          )
        ) {
          helpArray.push(element);
        }
      }
      for (const objHelp of helpArray) {
        number = objHelp.country_code + objHelp.phone_number;
        sendSMS = {
          Subject: "Aegis247 alert for help",
          Message: `Update. ${param.user.name} no longer needs Help and has cancelled the request.\r\n\r\nIf you still want to contact ${param.user.name} you can.\r\n\r\nAEGIS247`,
          PhoneNumber: number,
          MessageAttributes: {
            "AWS.MM.SMS.OriginationNumber": {
              DataType: "String",
              StringValue: process.env.TEN_DLC,
            },
          },
        };
        sns.publish(sendSMS, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });
      }
      await updateStatus(STATUS.COMPLETED, param.user.id);
    }
    if (!param.safetyplan) {
      const findManualHelp = await manualhelps.findOne({
        where: {
          user_id: param.user.id,
        },
      });
      for (const id of findManualHelp.help_group) {
        const data = await findGroupById(param.user.id, id);
        for (const obj of data.contacts) {
          helpArray.push(obj);
        }
      }
      for (const obj of findManualHelp.help_individuals) {
        helpArray.push(obj);
      }
      for (const contact of helpArray) {
        let number = contact.country_code + contact.phone_number;
        sendSMS = {
          Subject: "Aegis247 alert for help",
          Message: `Update. ${param.user.name} no longer needs Help and has cancelled the request.\r\n\r\nIf you still want to contact ${param.user.name} you can.\r\n\r\nAEGIS247`,
          PhoneNumber: number,
          MessageAttributes: {
            "AWS.MM.SMS.OriginationNumber": {
              DataType: "String",
              StringValue: process.env.TEN_DLC,
            },
          },
        };
        sns.publish(sendSMS, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });
      }
      await manualhelps.destroy({
        where: { user_id: param.user.id },
        force: true,
      });
    }
    return {
      err: false,
      data: null,
      msg: "Live location share.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
};

exports.checkInOut = async (param) => {
  try {
    const safetyplan = await findSafetyPlan(param.user.id);
    if (!safetyplan) {
      return {
        err: true,
        msg: SAFETYPLAN_NOT_FOUND,
      };
    }
    // const location = await findLocationById(
    //   param.user.id,
    //   safetyplan.location_id
    // );
    let checkInOutrray = [];
    let number;

    // if (
    //   moment().format("YYYY-MM-DDTHH:mm") >
    //   moment(safetyplan.dataValues.end_time).format("YYYY-MM-DDTHH:mm")
    // ) {
    if (safetyplan.dataValues.checkinout_group.length > 0) {
      for (const id of safetyplan.dataValues.checkinout_group) {
        const group = await findGroupById(safetyplan.dataValues.user_id, id);
        checkInOutrray = [...group.contacts];
      }
    }
    if (safetyplan.dataValues.checkinout_individuals.length > 0) {
      for (const element of safetyplan.dataValues.checkinout_individuals) {
        if (
          !checkInOutrray.some(
            (obj) =>
              obj.phone_number == element.phone_number &&
              obj.country_code == element.country_code
          )
        ) {
          checkInOutrray.push(element);
        }
      }
    }
    let obj1 = {};
    for (const obj of checkInOutrray) {
      number = obj.country_code + obj.phone_number;
      let sendSMS;
      if (param.check == true) {
        const uniqueId = param.user.id;
        let data = JSON.stringify({
          dynamicLinkInfo: {
            domainUriPrefix: "https://link.aegis-247.com",
            link: `https://location.aegis-247.com/?lat=${param.latitude}&long=${param.longitude}&time=${param.time}&type=checkIn&uniqueId=${uniqueId}`,
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
        const linkShare = await axios(config);
        obj1.link = linkShare.data.shortLink;
        obj1.uniqueID = uniqueId;
        sendSMS = {
          Subject: "Aegis247 For Safety plan check in",
          // Message:`${param.user.name} has checked into Location from safety plan and have shared their safety plan with you:\r\nUser full name:${param.user.name}\r\nUser phone number:${param.user.country_code}${param.user.phone_number}\r\nLocation to attend:${location.name}\r\nPerson(s) at location:${safetyplan.person_name}\r\nTime at location:${param.time}\r\nNotify Contacts on Help activation\r\nFor more contact ${param.user.name} on ${param.user.country_code}${param.user.phone_number}.\r\nAegis 24/7\r\nwww.google.com`,
          Message: `${param.user.name} has checked into a location and shared their AEGIS247 safety plan with you.\r\n\r\nView here.${obj1.link}\r\n\r\nFor more contact ${param.user.name} on ${param.user.country_code}${param.user.phone_number}.\r\n\r\nAEGIS247`,
          PhoneNumber: number,
          MessageAttributes: {
            "AWS.MM.SMS.OriginationNumber": {
              DataType: "String",
              StringValue: process.env.TEN_DLC,
            },
          },
        };
      }
      if (param.check == false) {
        sendSMS = {
          Subject: "Aegis247 For Safety plan check out",

          Message: `${param.user.name} has now checked out of the location in their AEGIS247 safety plan.\r\n\r\nFor more contact ${param.user.name} ${param.user.country_code}${param.user.phone_number}.\r\n\r\nAEGIS247`,
          // Message:`${param.user.name} has now checked out of Location from safety plan.\r\nAs part of their safety plan, they wanted you to know.\r\nFor more contact ${obj.name} on ${param.user.country_code}${param.user.phone_number}.\r\nAegis 24/7.`,
          PhoneNumber: number,
          MessageAttributes: {
            "AWS.MM.SMS.OriginationNumber": {
              DataType: "String",
              StringValue: process.env.TEN_DLC,
            },
          },
        };
        // await updateStatus(STATUS.COMPLETED, param.user.id);
      }
      sns.publish(sendSMS, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      });
    }

    return {
      err: false,
      data: obj1,
      msg: "Contact informed successfully.",
    };
  } catch (error) {
    console.log("~ error", error);
    return {
      err: true,
      msg: error.message,
    };
  }
};
