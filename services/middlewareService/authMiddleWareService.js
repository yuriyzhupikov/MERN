const jwt = require('jsonwebtoken');
const config = require('config');
const {onStatusService} = require("../statusService");

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return onStatusService(401, "No authorization", res);
        }

        const decodeToken = jwt.verify(token, config.get('jwtSecret'));
        req.user = decodeToken;
        next();
    } catch (e) {
        onStatusService(401, "No authorization", res);
    }
}