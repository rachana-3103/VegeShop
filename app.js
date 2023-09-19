const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const path = require("path");
const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/product.routes");
const cartRoutes = require("./routes/cart.routes");

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
app.use("/api/user", apiLimiter, userRoutes);
app.use("/api/product", apiLimiter, productRoutes);
app.use("/api/cart", apiLimiter, cartRoutes);

// router.post(
//   `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${process.env.KEY}`,
//   locationSharingController.link
// );

app.use(errorHandler);

module.exports = app;
