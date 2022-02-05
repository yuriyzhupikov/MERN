const {Router} = require('express');
const shortid = require('shortid');
const config = require('config');
const Link = require('../models/Link');
const authMW = require('../middleware/auth.middleware');
const router = Router();

// пост запрос генерирования ссылки
router.post('/generate', authMW, async  (req,res) => {
    try {
        const baseUrl = config.get('baseUrl');

        const {from}  = req.body;
        const code = shortid.generate();

        const link = await Link.findOne({from});
        if (link) {
            return res.json({link});
        }

        const to = baseUrl + '/to/' + code;

        const newLink = new Link({
            from, to, code, owner: req.user.userId,
        });
        newLink.save();

        res.status(201).json({newLink});
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

// получение ссылки по id
router.get('/:id', authMW, async (req, res) => {
    try {
        const link = await Link.findById(req.params.id);
    } catch (e) {
        res.status(500).json({message: 'Error'});
    }
});


module.exports = router;