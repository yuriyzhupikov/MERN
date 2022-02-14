const {Router} = require('express');
const {generate, getOne, getAll} = require('../controllers/linkController');
const authMW = require('../middleware/auth.middleware');
const router = Router();

router.post('/generate',
    authMW,
    async  (req,res) => generate(req, res));

router.get('/',
    authMW,
    async (req, res) => getAll(req, res));

router.get('/:id',
    authMW,
    async (req, res) => getOne(req, res));

module.exports = router;