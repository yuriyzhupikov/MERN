const {check} = require("express-validator");

module.exports = [
                    check('email', 'Incorrect email').isEmail(),
                    check('password', 'The minimum password length is 6 characters').isLength({min: 6})
                 ];
