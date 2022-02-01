const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const router = require("./routes/auth.routes");

const app = express();
const PORT = config.get('port') || 5000;

app.use('/api/auth', router);

async function start() {
    try {
        await mongoose.connect(config.get('mongoURL'));
        app.listen(PORT, () => console.log(`App has been started von port ${PORT}`));
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start();