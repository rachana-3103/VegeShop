const { safetyplans, locations } = require("../../models/index");
const {
  SAFETYPLAN_NOT_FOUND,
  SAFETYPLAN_ALREADY_EXIST,
  STATUS,
  LOCATION_EXIST,
  GROUP_NOT_FOUND_CHECKOUT,
  GROUP_NOT_FOUND_HELP,
} = require("../../helpers/messages");
const {
  findSafetyPlan,
  findSafetyPlanByLocationId,
  updateStatus,
  updateSafetyplan,
  updateAlert,
} = require("../../Dao/safetyplan");

const { findGroupById } = require("../../Dao/group");
const { updateLocations, findLocation } = require("../../Dao/location");
const AWS = require("aws-sdk");
const sns = new AWS.SNS();
const moment = require("moment");

async function addSafetyPlan(param) {
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

    if (param.locationId) {
      const safetyplan = await findSafetyPlanByLocationId(
        param.user.id,
        param.locationId
      );
      if (safetyplan) {
        return {
          err: true,
          msg: SAFETYPLAN_ALREADY_EXIST,
        };
      }
    } else {
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
      };
      location = await findLocation(locationObj);
      if (location) {
        return {
          err: true,
          msg: LOCATION_EXIST,
        };
      }
      location = await locations.create(locationObj);
    }
    const helpIndi = [];
    for (const obj of param.helpIndividuals) {
      obj.phone_number = obj.phoneNumber;
      delete obj.phoneNumber;
      helpIndi.push(obj);
    }
    const checkInOutIndi = [];
    for (const obj of param.checkInOutIndividuals) {
      obj.phone_number = obj.phoneNumber;
      delete obj.phoneNumber;
      checkInOutIndi.push(obj);
    }

    const safetyPlanObj = {
      user_id: param.user.id,
      location_id: param.locationId || location.dataValues.id,
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
      msg: "SafetyPlan added Successfully.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
}

async function updateSafetyPlan(param) {
  try {
    const safetyplan = await findSafetyPlan(param.user.id);
    if (!safetyplan) {
      return {
        err: true,
        msg: SAFETYPLAN_NOT_FOUND,
      };
    }

    const locationObj = {
      id: safetyplan.dataValues.location_id,
      user_id: param.user.id,
      latitude: param.latitude,
      longitude: param.longitude,
      name: param.name,
    };
    await updateLocations(locationObj);
    const safetyPlanObj = {
      location_id: param.locationId || safetyplan.dataValues.location_id,
      cover_radius: param.coverRadius,
      person_name: param.personName,
      start_time: moment(param.startTime).format("YYYY-MM-DDTHH:mm"),
      end_time: moment(param.endTime).format("YYYY-MM-DDTHH:mm"),
      help_individuals: param.helpIndividuals,
      checkinout_individuals: param.checkInOutIndividuals,
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
}

async function cancelSafetyPlan(param) {
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
      msg: "SafetyPlan Cancelled Successfully.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
}

async function completeSafetyPlan(param) {
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
      msg: "SafetyPlan Completed Successfully.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
}

async function getSafetyPlan(param) {
  try {
    const safetyplan = await findSafetyPlan(param.user.id);
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
}

async function alertSafetyPlan(param) {
  try {
    const safetyplan = await findSafetyPlan(param.user.id);

    if (!safetyplan) {
      return {
        err: true,
        msg: SAFETYPLAN_NOT_FOUND,
      };
    }
    for (const id of safetyplan.dataValues.help) {
      const data = await findGroupById(param.user.id, id);
      for (const obj of data.dataValues.contacts) {
        let sendSMS = {
          Subject: "Aegis24/7 For Help",
          Message: ` ${(param.latitude, param.longitude)} `,
          PhoneNumber: obj.phone_number,
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
}

module.exports = {
  addSafetyPlan,
  updateSafetyPlan,
  cancelSafetyPlan,
  completeSafetyPlan,
  getSafetyPlan,
  alertSafetyPlan,
};
