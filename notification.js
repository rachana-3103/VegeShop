const cron = require("node-cron");
const { safetyplans } = require("./models/index");
const moment = require("moment");
const { findUserById } = require("./Dao/user");
const AWS = require("aws-sdk");
const sns = new AWS.SNS();

cron.schedule("* * * * *", async () => {
  const safetyplan = await safetyplans.findAll({});
  for (const obj of safetyplan) {
    let date = moment(obj.dataValues.end_time);
    date = date.subtract(10, "minutes").format("YYYY-MM-DDTHH:mm");

    // notification send remain

    const user = await findUserById(obj.dataValues.user_id);

    if (date == moment().format("YYYY-MM-DDTHH:mm")) {
      let sendSMS = {
        Subject: "Aegis24/7 For Notification",
        Message: "Message",
        PhoneNumber:
          user.dataValues.country_code + user.dataValues.phone_number,
      };

      sns.publish(sendSMS, (err, result) => {
        if (err) {
          console.info(err);
        } else {
          console.info(result);
        }
      });
    }
  }
});
