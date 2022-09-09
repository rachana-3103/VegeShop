const { safetyplans, locations } = require("../../models/index");
const {
  SAFETYPLAN_NOT_FOUND,
  SAFETYPLAN_ALREADY_EXIST,
  STATUS,
  GROUP_NOT_FOUND_CHECKOUT,
  GROUP_NOT_FOUND_HELP,
  LOCATION_NOT_FOUND,
  NOTIFIED_CONTACT,
  NO_MORE_EXTEND,
} = require("../../helpers/messages");
const {
  findSafetyPlan,
  findSafetyPlanByLocationId,
  updateStatus,
  updateSafetyplan,
  updateAlert,
  findSafetyPlanAlert,
  updateExtend,
} = require("../../Dao/safetyplan");
const axios = require("axios");
const uuid = require("uuid");
const { findGroupById } = require("../../Dao/group");
const { updateBattery } = require("../../Dao/user");

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
const { patch } = require("../../routes/user.routes");

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
      Object.assign(locationObj,{
        id: location.id
      })
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
      start_time: moment(param.startTime).utc().format(),
      end_time: moment(param.endTime).utc().format(),
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
      msg: 'Cancelled safety plan.',
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
    await updateStatus(STATUS.COMPLETED, param.user.id);

    return {
      err: false,
      data: null,
      msg: 'Completed safety plan.',
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
    const safetyplan = await findSafetyPlan(param.user.id);
    const location = await findLocationById(param.user.id, safetyplan.location_id);
    safetyplan.dataValues.location = location.dataValues
    if (!safetyplan) {
      return {
        err: true,
        msg: SAFETYPLAN_NOT_FOUND,
      };
    }
    return {
      err: false,
      data: safetyplan.dataValues,
      msg: "SafetyPlan Details.",
    };
  } catch (error) {
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
    const data = JSON.stringify({
      dynamicLinkInfo: {
        domainUriPrefix: "https://ages.page.link",
        link: `https://www.example.com/?lat=${param.latitude}&long=${param.longitude}&type=help&uniqueId=${uniqueId}`,
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
    const linkShare = await axios(config);
    obj.link = linkShare.data.shortLink;
    obj.uniqueID = uniqueId;

    if (param.type == "manual") {
      const helpArray = [];
      for (const id of param.helpGroup) {
        const data = await findGroupById(param.user.id, id);
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
      await updateBattery(param.user.id, param.battery);
      for (const contact of helpArray) {
        let number = contact.country_code + contact.phone_number;
        sendSMS = {
          Subject: "Aegis247 alert for help",
          Message: `${param.user.name} has activated the help button on their Aegis 24/7 safety app.
          Contact this person now.
          user live location on an online map: ${obj.link}
          user full name: ${param.user.name}
          user phone number: ${param.user.phone_number}
          phone battery: ${param.battery}
          Aegis 24/7.`,
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
            Message: `${param.user.name} has activated the help button on their Aegis 24/7 safety app.
            Contact this person now.
            user live location on an online map: ${obj.link}
            user full name: ${param.user.name}
            user phone number: ${param.user.phone_number}
            phone battery: ${param.battery}
            Aegis 24/7.`,
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

exports.responded = async (param) => {
  try {
    let helpArray = [];
    if (param.safetyplan) {
      const safetyplan = await findSafetyPlan(param.user.id);
      for (const id of safetyplan.dataValues.help_group) {
        const group = await findGroupById(safetyplan.dataValues.user_id, id);
        helpArray = [...group.contacts];
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
            Message: `Update. ${param.user.name} messaged for Help.
            A Contact from their Aegis 24/7 safety plan has responded.
            If you still want to contact ${param.user.name} you can.
            Aegis 24/7.`,
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
    }

    if (!param.safetyplan) {
      for (const id of param.helpGroup) {
        const data = await findGroupById(param.user.id, id);
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
      for (const contact of helpArray) {
        let number = contact.country_code + contact.phone_number;
        sendSMS = {
          Subject: "Aegis247 alert for help",
          Message: `Update. ${param.user.name} messaged for Help.
          A Contact from their Aegis 24/7 safety plan has responded.
          If you still want to contact ${param.user.name} you can.
          Aegis 24/7.`,
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
      for (const id of safetyplan.dataValues.help_group) {
        const group = await findGroupById(safetyplan.dataValues.user_id, id);
        helpArray = [...group.contacts];
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
            Message: `Update. ${param.user.name} no longer needs Help and has cancelled the request.
            If you still want to contact ${param.user.name} you can.
            Aegis 24/7`,
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
    }

    if (!param.safetyplan) {
      for (const id of param.helpGroup) {
        const data = await findGroupById(param.user.id, id);
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
      for (const contact of helpArray) {
        let number = contact.country_code + contact.phone_number;
        sendSMS = {
          Subject: "Aegis247 alert for help",
          Message: `Update. ${param.user.name} no longer needs Help and has cancelled the request.
          If you still want to contact ${param.user.name} you can.
          Aegis 24/7`,
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
    console.log("~ error", error);
    return {
      err: true,
      msg: error.message,
    };
  }
};

exports.checkInOut = async (param) => {
  try {
    let response ={};
    const safetyplan = await findSafetyPlan(param.user.id);
    const location = await findLocationById(
      param.user.id,
      safetyplan.location_id
    );
    if (!safetyplan) {
      return {
        err: true,
        msg: SAFETYPLAN_NOT_FOUND,
      };
    }

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

    for (const obj of checkInOutrray) {
      number = obj.country_code + obj.phone_number;
      let sendSMS;
      if (param.check == true) {
        // const uniqueId = uuid.v4();
        // const data = JSON.stringify({
        //   dynamicLinkInfo: {
        //     domainUriPrefix: "https://ages.page.link",
        //     link: `http://34.227.59.13:5000/?name=${param.user.name}&number=${param.user.phone_number}&location=${location.name}&person=${safetyplan.person_name}&time=${param.time}`,
        //     androidInfo: {
        //       androidPackageName: process.env.ANDROID_PACKAGE_NAME,
        //     },
        //     iosInfo: {
        //       iosBundleId: process.env.IOS_PACKAGE_NAME,
        //     },
        //   },
        // });
        // const config = {
        //   method: "POST",
        //   url: `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${process.env.KEY}`,
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   data: data,
        // };
        // const linkShare = await axios(config);
        // response.link = linkShare.data.shortLink;
        // // obj.uniqueID = uniqueId;
        sendSMS = {
          Subject: "Aegis247 For Safety plan check in",
          Message: `${param.user.name} has checked into Location from safety plan and have shared their safety plan with you: Aegis 24/7.`,
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
          Message: `${param.user.name} has now checked out of Location from safety plan. As part of their safety plan, they wanted you to know. For more contact ${param.user.name} on ${param.user.phone_number}. Aegis 24/7.`,
          PhoneNumber: "+917779064419",
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
          console.log(err);
        } else {
          console.log(result);
        }
      });
    }

    return {
      err: false,
      data: null,
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
