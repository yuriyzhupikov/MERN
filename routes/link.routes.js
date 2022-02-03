const {Router} = require('express');
const config = require('config');

const Link = require('../models/Link');
const {validationResult} = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const router = Router();

// пост запрос генерирования ссылки
router.post('/generate', async  (req,res) => {
    try {

    } catch (e) {
        res.status(500).json({message: 'Error'});
    }
});

// гет запрос для получения всех ссылок
router.get('/', async (req, res) => {
    try {
        const links = await Link.find({owner: null});
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