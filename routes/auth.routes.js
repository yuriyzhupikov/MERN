const {Router} = require('express');
const router = Router();

router.post('/register', async (req, res) => {
    try {
        const {email, password} = req.body;
    } catch (e) {
        res.status(500).json({messaage: 'Error'});
    }
})

module.exports = router;