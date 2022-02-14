const config = require("config");
const shortid = require("shortid");
const Link = require("../models/Link");


async function generate(req, res)  {
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
            from, to, code, owner: req.user.userID,
        });
        newLink.save();

        res.status(201).json({newLink});
    } catch (e) {
        res.status(500).json({message: 'Error'});
    }
}

async function getAll(req, res) {
    try {
        const links = await Link.find({owner: req.user.userID});
        res.json(links);
    } catch (e) {
        res.status(500).json({message: 'Error'});
    }
}

async function getOne(req, res) {
    try {
        const link = await Link.findById(req.params.id);
        res.json(link);
    } catch (e) {
        res.status(500).json({message: 'Error'});
    }
}

module.exports = {generate, getOne, getAll}