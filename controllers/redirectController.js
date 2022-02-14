const {redirectService} = require('../services/redirectService');

async function redirectController (req, res) {
    redirectService(req, res);
}

module.exports = {redirectController}