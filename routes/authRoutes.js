const {Router} = require('express');
const {validationRulesService} = require('../services/validationService');
const router = Router();
const {loginController, registrationController} = require('../controllers/authController');

router.post('/register',
    validationRulesService(),
    async (req, res) => loginController(req, res)
);

router.post('/login',
    validationRulesService(),
    async (req, res) => registrationController(req, res)
);

module.exports = router;