const { faqs } = require("../models/index");

exports.findByUserId = async (userId) => {
  return await faqs.findOne({
    where: {
      user_id: userId,
    },
  });
};

exports.createFaqs = async (obj) => {
  return await faqs.create(obj);
};

exports.updateCount = async (userId, count) => {
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
};

exports.updateFaq = async (faqObj, userId) => {
  return await faqs.update(faqObj, {
    where: {
      user_id: userId,
    },
  });
};

exports.userFaqDelete = async (userId) => {
  return await faqs.destroy({
    where: { user_id: userId },
    force: true,
  });
};

