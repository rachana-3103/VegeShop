const { faqs } = require("../../models/index");

const {} = require("../../helpers/messages");

async function sendFaq(param) {
  try {
    return {
      err: false,
      data: null,
      msg: "Group added Successfully.",
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
