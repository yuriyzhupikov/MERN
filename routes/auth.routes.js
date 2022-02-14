const {Router} = require('express');
const validation = require('../validation/validation');
const router = Router();

const {login, registration} = require('../controllers/authController');

router.post('/register',
    validation,
    async (req, res) => login(req, res)
);

router.post('/login',
    validation,
    async (req, res) => registration(req, res)
);
module.exports = router;