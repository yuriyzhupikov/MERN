const {Router} = require('express');
const {generateController, getOneController, getAllController} = require('../controllers/linkController');
const authMiddleWareService = require('../services/middlewareService/authMiddleWareService');

const router = Router();

router.post('/generate',
    authMiddleWareService,
    async  (req,res) => generateController(req, res));

router.get('/',
    authMiddleWareService,
    async (req, res) => getAllController(req, res));

router.get('/:id',
    authMiddleWareService,
    async (req, res) => getOneController(req, res));

module.exports = router;