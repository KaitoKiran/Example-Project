const mongoose = require("mongoose");

const message = mongoose.Schema({
    sender: {type: String, required: true},
    datetime: {type: String, required: true},
    message: {type: String, required: true}
})

module.exports = mongoose.model('message', message);