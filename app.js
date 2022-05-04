const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const path = require('path');

const userRoutes = require('./routes/user.routes');
// const { errorHandler } = require('./middleware/errorHandler');

const { TOO_MANY_REQUESTS } = require('./helpers/messages');

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
  message: {
    error: TOO_MANY_REQUESTS,
  },
});

const app = express();

app.use(cors());
app.options('*', cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(logger('common'));
app.set('templates', path.join(__dirname, 'templates'));

//set view engine
app.set('view engine', 'ejs');
app.use('/', apiLimiter, userRoutes);
// app.use(errorHandler);

module.exports = app;
