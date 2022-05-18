const { safetyplans } = require("../models/index");

async function findSafetyPlanById(userId, id) {
  return await safetyplans.findOne({
    where: {
      id,
      user_id: userId,
    },
  });
}

async function findSafetyPlanByName(userId, name) {
  return await safetyplans.findOne({
    where: {
      name,
      user_id: userId,
    },
  });
}

module.exports = {
  findSafetyPlanById,
  findSafetyPlanByName,
};
