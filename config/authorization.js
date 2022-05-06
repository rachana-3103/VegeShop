const {
    errorResponse,
} = require('../helpers/helpers');

const {
    UNAUTHORIZED_USER,
    NO_TOKEN_PROVIDED,
    TOKEN_EXPIRED
} = require('../helpers/messages');
const moment = require('moment');
const { findUserByAuthToken } = require('../Dao/user');

exports.authorization = async (req, res, next) => {
    const authToken = req.headers.token;
    const currentTime = moment().utc();

    if (!(req.headers && req.headers.token)) {
        return errorResponse(req, res, NO_TOKEN_PROVIDED, 401);
    }
    const user = await findUserByAuthToken(authToken);

    if (!user) {
        return errorResponse(req, res, UNAUTHORIZED_USER, 401);
    }
    if (user && user.token_expired > currentTime) {
        return next();
    }
    if (user && user.token_expired < currentTime) {
        return errorResponse(req, res, TOKEN_EXPIRED, 401);
    }
}

