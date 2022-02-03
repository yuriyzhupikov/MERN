const {Router} = require('express');
const config = require('config');

const Link = require('../models/Link');
const {validationResult} = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const router = Router();
const authMW = require('../middleware/auth.middleware');

// пост запрос генерирования ссылки
router.post('/generate', async  (req,res) => {
    try {

    } catch (e) {
        res.status(500).json({message: 'Error'});
    }
});

// гет запрос для получения всех ссылок
router.get('/', authMW, async (req, res) => {
    try {
        const links = await Link.find({owner: req.user.userId});
        res.json(links);
    } catch (e) {
        res.status(500).json({message: 'Error'});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const link = await Link.findById(req.params.id);
    } catch (e) {
        res.status(500).json({message: 'Error'});
    }
});


// получение ссылки по id
module.exports = router;