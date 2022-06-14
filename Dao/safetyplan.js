const { safetyplans } = require("../models/index");
const { STATUS } = require("../helpers/messages");
const moment = require("moment");

async function findSafetyPlan(userId) {
  return await safetyplans.findOne({
    where: {
      user_id: userId,
      status: STATUS.INPROGRESS,
    },
  });
}

async function findSafetyPlanAlert(userId) {
  return await safetyplans.findOne({
    where: {
      user_id: userId,
      alert: false,
    },
  });
}

async function findSafetyPlanByLocationId(userId, locationId) {
  return await safetyplans.findOne({
    where: {
      location_id: locationId,
      user_id: userId,
      status: STATUS.INPROGRESS,
    },
  });
}

async function updateStatus(status, userId) {
  return await safetyplans.update(
    { status },
    {
      where: {
        user_id: userId,
        status: STATUS.INPROGRESS,
      },
    }
  );
}

async function updateSafetyplan(safetyplan, userId) {
  return await safetyplans.update(safetyplan, {
    where: {
      user_id: userId,
      status: STATUS.INPROGRESS,
    },
  });
}

async function updateAlert(userId) {
  return await safetyplans.update(
    {
      alert: true,
    },
    {
      where: {
        user_id: userId,
        status: STATUS.INPROGRESS,
      },
    }
  );
}

async function updateExtend(userId, extendPlan, endTime) {
  return await safetyplans.update(
    {
      extend_plan: extendPlan,
      end_time: moment(endTime).add(10, "minutes").format("YYYY-MM-DDTHH:mm"),
    },
    {
      where: {
        user_id: userId,
        status: STATUS.INPROGRESS,
      },
    }
  );
}

async function userSafetyplanDelete(userId) {
  return await safetyplans.destroy({
    where: { user_id: userId },
    force: true,
  });
}

module.exports = {
  updateExtend,
  findSafetyPlan,
  findSafetyPlanByLocationId,
  updateStatus,
  updateSafetyplan,
  updateAlert,
  findSafetyPlanAlert,
  userSafetyplanDelete,
};
