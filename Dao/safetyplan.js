const { safetyplans } = require("../models/index");
const { STATUS } = require("../helpers/messages");

async function findSafetyPlanById(userId, id) {
  return await safetyplans.findOne({
    where: {
      id,
      user_id: userId,
      status: STATUS.INPROGRESS,
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

async function updateStatus(status, userId, id) {
  return await safetyplans.update(
    { status },
    {
      where: {
        id,
        user_id: userId,
        status: STATUS.INPROGRESS,
      },
    }
  );
}

async function updateSafetyplan(safetyplan, id, userId) {
  return await safetyplans.update(safetyplan, {
    where: {
      id,
      user_id: userId,
      status: STATUS.INPROGRESS,
    },
  });
}

module.exports = {
  findSafetyPlanById,
  findSafetyPlanByLocationId,
  updateStatus,
  updateSafetyplan,
};
