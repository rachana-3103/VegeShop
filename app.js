const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const path = require("path");
const userRoutes = require("./routes/user.routes");
const groupRoutes = require("./routes/group.routes");
const safetyPlanRoutes = require("./routes/safetyplan.routes");
const locationRoutes = require("./routes/location.routes");
const locationSharingRoutes = require("./routes/locationsharing.routes");
const faqRoutes = require("./routes/faq.routes");

const { errorHandler } = require("./middleware/errorHandler");
const { TOO_MANY_REQUESTS } = require("./helpers/messages");

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
  message: {
    error: TOO_MANY_REQUESTS,
  },
});

const app = express();

app.use(cors());
app.options("*", cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(logger("common"));
app.set("templates", path.join(__dirname, "templates"));
app.use("/documents", express.static("documents"));

//set view engine
app.set("view engine", "ejs");
app.use("/api/v1/user", apiLimiter, userRoutes);
app.use("/api/v1/group", apiLimiter, groupRoutes);
app.use("/api/v1/safetyplan", apiLimiter, safetyPlanRoutes);
app.use("/api/v1/location", apiLimiter, locationRoutes);
app.use("/api/v1/location-sharing", apiLimiter, locationSharingRoutes);
app.use("/api/v1/faqs", apiLimiter, faqRoutes);

// router.post(
//   `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${process.env.KEY}`,
//   locationSharingController.link
// );

app.use(errorHandler);

module.exports = app;
