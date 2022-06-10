const {} = require("../../helpers/messages");
const {
  createFaqs,
  findByUserId,
  updateCount,
  updateFaq,
} = require("../../Dao/faq");

async function sendFaq(param) {
  try {
    const user = await findByUserId(param.user.id);
    let question = [];
    let faqObj;

    if (param.question) {
      if (user) {
        user.dataValues.questions.push(param.question);
        faqObj = {
          questions: user.dataValues.questions,
          count: (user.dataValues.count += 1),
        };
        await updateFaq(faqObj, param.user.id);
      } else {
        question.push(param.question);
        faqObj = {
          user_id: param.user.id,
          questions: question,
          count: 1,
        };
        await createFaqs(faqObj);
      }
    } else {
      if (user) {
        user.dataValues.count += 1;
        await updateCount(param.user.id, user.dataValues.count);
      } else {
        faqObj = {
          user_id: param.user.id,
          questions: [],
          count: 1,
        };
        await createFaqs(faqObj);
      }
    }

    return {
      err: false,
      data: null,
      msg: "Question send Successfully.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
}

module.exports = {
  sendFaq,
};
