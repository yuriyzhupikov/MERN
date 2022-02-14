const {getAllService, generateService, getOneService} = require("../services/linkService");

async function generateController(req, res)  {
    await generateService(req, res);
}

async function getAllController(req, res) {
    await getAllService(req, res);
}

async function getOneController(req, res) {
    await getOneService(req, res);
}

module.exports = {generateController, getOneController, getAllController}