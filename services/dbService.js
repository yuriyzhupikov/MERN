const mongoose = require("mongoose");
const config = require("config");

module.exports = {
    connect: async function (url) {
        switch (url) {
            case 'mongoDB' : return await mongoose.connect(config.get(url));
        }
    }
}