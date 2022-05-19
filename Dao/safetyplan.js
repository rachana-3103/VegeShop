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

async function findSafetyPlanByName(userId, name) {
  return await safetyplans.findOne({
    where: {
      name,
      user_id: userId,
      status: STATUS.INPROGRESS
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

module.exports = {
  findSafetyPlanById,
  findSafetyPlanByName,
  updateStatus,
};
