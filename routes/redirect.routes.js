const {Router} = require('express');
const {redirect} = require('../controllers/redirectController/');
const router = Router();

router.get('/:id',
    async (req, res) => redirect(req, res)
);

module.exports = router;