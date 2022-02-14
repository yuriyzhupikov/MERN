const {validationResult} = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");

async function login (req, res) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect data during registration'
            })
        }
        const {email, password} = req.body;
        let user = await User.findOne({email});
        if (user) {
            return res.status(400).json({message: 'Oops! There is already such a user'});
        }
        const passwordHash = await bcrypt.hash(password, 12);
        user = new User({email, password: passwordHash});
        await user.save();
        res.status(201).json({message: "User created"})
    } catch (e) {
        res.status(500).json({message: 'Error'});
    }
}

async function registration (req, res) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Invalid data during authorization'
            })
        }
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({message: 'Oops! There is no such user'});
        }
        const isMatchPassword = await bcrypt.compare(password, user.password);
        if (!isMatchPassword) {
            return res.status(400).json({message: 'Invalid password'});
        }
        // authorization process via jwt
        const token = jwt.sign({userID: user.id}, config.get('jwtSecret'));

        res.json({token, userId: user.id});
    } catch (e) {
        res.status(500).json({message: 'Error'});
    }
}

module.exports = {login, registration}