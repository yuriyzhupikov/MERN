const config = require("config");
const shortid = require("shortid");
const Link = require("../models/Link");
const {onStatusService} = require("./statusService");

async function generateService(req, res)  {
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

        onStatusService(201, {newLink}, res);
    } catch (e) {
        onStatusService(500, 'Error', res);
    }
}

async function getOneService(req, res) {
    try {
        const link = await Link.findById(req.params.id);
        res.json(link);
    } catch (e) {
        onStatusService(500, 'Error', res);
    }
}

async function getAllService(req, res) {
    try {
        const links = await Link.find({owner: req.user.userID});
        res.json(links);
    } catch (e) {
        onStatusService(500, 'Error', res);
    }
}

module.exports = {generateService, getOneService, getAllService}