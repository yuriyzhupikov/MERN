const express = require('express');
const config = require('config');
const path = require('path');
const dataBase = require("./services/dbService");
const {DB_MONGO} = require("./config/consts");

const app = express();
const PORT = config.get('port') || 5000;

app.use(express.json({extended: true}));
app.use('/api/auth', require("./routes/authRoutes"));
app.use('/api/link', require("./routes/linkRoutes"));
app.use('/to', require('./routes/redirectRoutes'));

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.resolve(__dirname, 'client', 'build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    })
}

async function start() {
    try {
        await dataBase.connect(DB_MONGO);
        app.listen(PORT, () => console.log(`App has been started von port ${PORT}`));
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start();