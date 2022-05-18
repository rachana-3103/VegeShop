const { safetyplans } = require("../../models/index");
const {
  SAFETYPLAN_NOT_FOUND,
  SAFETYPLAN_ALREADY_EXIST,
} = require("../../helpers/messages");
const {
  findSafetyPlanById,
  findSafetyPlanByName,
} = require("../../Dao/safetyplan");

async function addSafetyPlan(param) {
  try {
    const safetyplan = await findSafetyPlanByName(param.user.id, param.name);
    if (safetyplan) {
      return {
        err: true,
        msg: SAFETYPLAN_ALREADY_EXIST,
      };
    }
    const safetyPlanObj = {
      name: param.name,
      user_id: param.user.id,
      location_id: param.locationId || null,
      latitude: param.latitude,
      longitude: param.longitude,
      favorite: param.favorite,
      cover_radius: param.coverRadius,
      person_name: param.personName,
      start_time: param.startTime,
      end_time: param.endTime,
      help: param.help,
      check_in_out: param.checkInOut,
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

async function getSafetyPlan(param) {
  try {
    const safetyplan = await findSafetyPlanById(param.user.id, param.id);
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
  getSafetyPlan,
};
