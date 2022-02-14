const mongoose = require("mongoose");
const config = require("config");
const {DB_MONGO} = require("../config/consts");

module.exports = {
    connect: async function (url) {
        switch (url) {
            case DB_MONGO : return await mongoose.connect(config.get(url));
        }
    }
}