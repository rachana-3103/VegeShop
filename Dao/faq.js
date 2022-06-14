const { faqs } = require("../models/index");

async function findByUserId(userId) {
  return await faqs.findOne({
    where: {
      user_id: userId,
    },
  });
}

async function createFaqs(obj) {
  return await faqs.create(obj);
}

async function updateCount(userId, count) {
  return await faqs.update(
    {
      count,
    },
    {
      where: {
        user_id: userId,
      },
    }
  );
}

async function updateFaq(faqObj, userId) {
  return await faqs.update(faqObj, {
    where: {
      user_id: userId,
    },
  });
}

async function userFaqDelete(userId) {
  return await faqs.destroy({
    where: { user_id: userId },
    force: true,
  });
}

module.exports = {
  findByUserId,
  createFaqs,
  updateCount,
  updateFaq,
  userFaqDelete,
};
