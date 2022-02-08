const {Router} = require('express');
const Link = require('../models/Link');
const router = Router();

router.get('/:id', async (req, res) => {
    try {
        const link = await Link.findOne({code: req.params.id});
        if (!link) {
            res.status(404).json('ссылка не найдена');
        }
        link.clicks++;
        await link.save();
        return res.redirect(link.from);
    } catch (e) {}
})

module.exports = router;