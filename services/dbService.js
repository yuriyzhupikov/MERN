const mongoose = require("mongoose");
const config = require("config");
const {DB_MONGO} = require("../consts");

module.exports = {
    connect: async function (url) {
        switch (url) {
            case DB_MONGO : return await mongoose.connect(config.get(url));
        }
    }
}