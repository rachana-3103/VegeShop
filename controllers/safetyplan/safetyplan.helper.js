const { safetyplans, locations } = require("../../models/index");
const {
  SAFETYPLAN_NOT_FOUND,
  SAFETYPLAN_ALREADY_EXIST,
  STATUS,
} = require("../../helpers/messages");
const {
  findSafetyPlan,
  findSafetyPlanByLocationId,
  updateStatus,
  updateSafetyplan,
} = require("../../Dao/safetyplan");

const { updateLocations } = require("../../Dao/location");
async function addSafetyPlan(param) {
  try {
    let location;
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
      const locationObj = {
        user_id: param.user.id,
        latitude: param.latitude,
        longitude: param.longitude,
        name: param.name,
      };
      location = await locations.create(locationObj);
    }
    const safetyPlanObj = {
      user_id: param.user.id,
      location_id: param.locationId || location.dataValues.id,
      cover_radius: param.coverRadius,
      person_name: param.personName,
      start_time: param.startTime,
      end_time: param.endTime,
      help: param.help,
      check_in_out: param.checkInOut,
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
    const safetyplan = await findSafetyPlanById(
      param.user.id,
      param.safetyPlanId
    );
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
      start_time: param.startTime,
      end_time: param.endTime,
      help: param.help,
      check_in_out: param.checkInOut,
    };

    await updateSafetyplan(safetyPlanObj, param.safetyPlanId, param.user.id);
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

module.exports = {
  addSafetyPlan,
  updateSafetyPlan,
  cancelSafetyPlan,
  completeSafetyPlan,
  getSafetyPlan,
};
