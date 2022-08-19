const { safetyplans } = require("../models/index");
const { STATUS } = require("../helpers/messages");
const moment = require("moment");

exports.findSafetyPlan = async (userId) => {
  return await safetyplans.findOne({
    where: {
      user_id: userId,
      status: STATUS.INPROGRESS,
    },
  });
};

exports.findSafetyPlanAlert = async (userId) => {
  return await safetyplans.findOne({
    where: {
      user_id: userId,
      alert: false,
    },
  });
};

exports.findSafetyPlanByLocationId = async (userId, locationId) => {
  return await safetyplans.findOne({
    where: {
      location_id: locationId,
      user_id: userId,
      status: STATUS.INPROGRESS,
    },
  });
};

exports.updateSafetyplan = async (safetyplan, userId) => {
  return await safetyplans.update(safetyplan, {
    where: {
      user_id: userId,
      status: STATUS.INPROGRESS,
    },
  });
};

exports.updateStatus = async (status, userId) => {
  return await safetyplans.update(
    { status},
    {
      where: {
        user_id: userId,
        status: STATUS.INPROGRESS,
      },
    }
  );
};

exports.updateSafetyplan = async (safetyplan, userId) => {
  return await safetyplans.update(safetyplan, {
    where: {
      user_id: userId,
      status: STATUS.INPROGRESS,
    },
  });
};

exports.updateAlert = async (userId) => {
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
};

exports.updateExtend = async (userId, extendPlan, endTime) => {
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
};

exports.userSafetyplanDelete = async (userId) => {
  return await safetyplans.destroy({
    where: { user_id: userId },
    force: true,
  });
};
