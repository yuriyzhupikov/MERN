const {Router} = require('express');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const router = Router();

router.post('/register', async (req, res) => {
    try {
        const {email, password} = req.body;
        let user = await User.findOne({email});
        if (user) {
           return res.status(400).json({message: 'Oops! There is already such a user'});
        }
        const passwordHash = await bcrypt.hash(password, 12);
        user = new User({email, password: passwordHash});
        await user.save();
    } catch (e) {
        res.status(500).json({message: 'Error'});
    }
})

module.exports = router;