const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const {onStatusService} = require("./statusService");

async function loginService(req, res) {
    try {
        const {email, password} = req.body;
        let user = await User.findOne({email});
        if (user) {
            return onStatusService(400, 'Oops! There is already such a user', res);
        }
        const passwordHash = await bcrypt.hash(password, 12);
        user = new User({email, password: passwordHash});
        await user.save();
        onStatusService(201, 'User created', res);
    } catch (e) {
        onStatusService(500, 'Error', res);
    }
}

async function registrationService(req, res) {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if (!user) {
            return onStatusService(400, 'Oops! There is no such user', res);
        }
        const isMatchPassword = await bcrypt.compare(password, user.password);
        if (!isMatchPassword) {
            return res.status(400).json({message: 'Invalid password'});
        }
        const token = jwt.sign({userID: user.id}, config.get('jwtSecret'));

        onStatusService(201, {token, userId: user.id}, res);
    } catch (e) {
        onStatusService(500, 'Error', res);
    }
}

module.exports = {loginService, registrationService}