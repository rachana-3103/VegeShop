const cron = require("node-cron");
const { safetyplans } = require("./models/index");
const moment = require("moment");
const { findGroupById } = require("./Dao/group");
const AWS = require("aws-sdk");
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
});
const sns = new AWS.SNS();

cron.schedule("* * * * *", async () => {
  try {
    let helpArray = [];
    let checkInOutArray = [];
    const safetyplan = await safetyplans.findAll({});
    for (const obj of safetyplan) {
      let date = moment(obj.dataValues.end_time);
      date = date.subtract(10, "minutes").format("YYYY-MM-DDTHH:mm");

      // notification send remain

      if (date == moment().format("YYYY-MM-DDTHH:mm")) {
        for (const data of obj.dataValues.help_group) {
          const group = await findGroupById(obj.dataValues.user_id, data);
          helpArray = [...group.contacts];
          for (const el of obj.dataValues.help_individuals) {
            if (
              !helpArray.some((obj) => obj.phone_number === el.phone_number)
            ) {
              helpArray.push(el);
            }
          }
          // console.log("~ group.contacts -----help ", helpArray);
        }

        for (const data of obj.dataValues.checkinout_group) {
          const group = await findGroupById(obj.dataValues.user_id, data);
          checkInOutArray = [...group.contacts];
          for (const element of obj.dataValues.checkinout_individuals) {
            if (
              !checkInOutArray.some(
                (obj) => obj.phone_number === element.phone_number
              )
            ) {
              checkInOutArray.push(element);
            }
          }
          // console.log("~ group.contacts -----check ", checkInOutArray);
        }
      }
    }
    if (helpArray.length > 0) {
      for (const groupObj of helpArray) {
        const sendSMS = {
          Subject: "Aegis24/7 Notification",
          Message: "Message for help",
          PhoneNumber: groupObj.phone_number,
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
    if (checkInOutArray.length > 0) {
      for (const groupObj of checkInOutArray) {
        const sendSMS = {
          Subject: "Aegis24/7 Notification",
          Message: "Message for check-In-Out",
          PhoneNumber: groupObj.phone_number,
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
  } catch (error) {
    console.log("~ error======", error);
  }
});
