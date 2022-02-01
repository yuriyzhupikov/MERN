const {Router} = require('express');
const bcrypt = require('bcrypt');
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../models/User');
const router = Router();

router.post('/register',
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'The minimum password length is 6 characters').isLength({min: 6})
    ],
    async (req, res) => {
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
    } catch (e) {
        res.status(500).json({message: 'Error'});
    }
});

router.post('/login',
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'The minimum password length is 6 characters').isLength({min: 6})
    ],
    async (req, res) => {
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
            const token = jwt.sign(
                {userID: user.id},
                config.get('jwtSecret'),
                {expiresIN: '1h'}
            );
            res.json({token, userID: user.id});
        } catch (e) {
            res.status(500).json({message: 'Error'});
        }
    });
module.exports = router;