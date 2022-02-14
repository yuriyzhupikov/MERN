const {validationFormService} = require('../services/validationService');
const {loginService, registrationService} = require('../services/authService');

async function loginController(req, res) {
    validationFormService(req, res);
    await loginService(req, res);
}

async function registrationController (req, res) {
    validationFormService(req, res);
    await registrationService(req, res);
}

module.exports = {loginController, registrationController}