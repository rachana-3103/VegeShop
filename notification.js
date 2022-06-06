const cron = require("node-cron");
const { safetyplans } = require("./models/index");
const moment = require("moment");
const { findUserById } = require("./Dao/user");

const { STATUS } = require("./helpers/messages");

const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.PROJECT_ID,
    clientEmail: process.env.CLIENT_EMAIL,
    privateKey: process.env.PRIVATE_KEY,
  }),
});

cron.schedule("* * * * *", async () => {
  try {
    const safetyplan = await safetyplans.findAll({
      where: {
        status: STATUS.INPROGRESS,
      },
    });
    for (const obj of safetyplan) {
      let date = moment(obj.dataValues.end_time);
      date = date.add(10, "minutes").format("YYYY-MM-DDTHH:mm");
      const user = await findUserById(obj.dataValues.user_id);

      // notification send after 10 min

      if (date == moment().format("YYYY-MM-DDTHH:mm")) {
        const payload = {
          data: {
            body: "aegis 24/7 for after 10 min check In/Out",
            title: "aegis 24/7",
          },
          notification: {
            body: "aegis 24/7 for after 10 min check In/Out",
            title: "aegis 24/7",
          },
        };
        const options = {
          priority: "high",
          ttl: 10 * 60 * 1000,
        };
        admin
          .messaging()
          .sendToDevice(user.device_token, payload, options)
          .then((response) => {
            console.info("~ response", response);
          })
          .catch((err) => {
            console.info("~ err", err);
          });
      }
    }
  } catch (error) {
    console.log("~ error======", error);
  }
});
