const Link = require("../models/Link");
const {onStatusService} = require("./statusService");

async function redirectService(req, res) {
    try {
        const link = await Link.findOne({code: req.params.id});
        if (!link) {
            onStatusService(404, 'ссылка не найдена', res);
        }
        link.clicks++;
        await link.save();
        return res.redirect(link.from);
    } catch (e) {}
}

module.exports = {redirectService}