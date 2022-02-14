const {Router} = require('express');
const {generateController, getOneController, getAllController} = require('../controllers/linkController');
const authMW = require('../middleware/auth.middleware');
const router = Router();

router.post('/generate',
    authMW,
    async  (req,res) => generateController(req, res));

router.get('/',
    authMW,
    async (req, res) => getAllController(req, res));

router.get('/:id',
    authMW,
    async (req, res) => getOneController(req, res));

module.exports = router;