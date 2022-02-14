const {check, validationResult} = require("express-validator");
const {onStatusService} = require("./statusService");

function validationRulesService () {
    return [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'The minimum password length is 6 characters').isLength({min: 6})
    ]
}
function validationFormService (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return onStatusService(400, {
            errors: errors.array(),
            message: 'Incorrect data during registration'
        }, res);
    }
}

module.exports = {validationRulesService, validationFormService}