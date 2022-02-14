const {redirectService} = require('../services/redirectService');

async function redirectController (req, res) {
    await redirectService(req, res);
}

module.exports = {redirectController}