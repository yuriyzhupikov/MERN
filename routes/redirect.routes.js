const {Router} = require('express');
const {redirectController} = require('../controllers/redirectController');
const router = Router();

router.get('/:id',
    async (req, res) => redirectController(req, res)
);

module.exports = router;