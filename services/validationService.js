const {check, validationResult} = require("express-validator");

function validationRulesService () {
    return [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'The minimum password length is 6 characters').isLength({min: 6})
    ]
}
function validationFormService (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
            message: 'Incorrect data during registration'
        })
    }
}

module.exports = {validationRulesService, validationFormService}