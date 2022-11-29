const mongoose = require("mongoose");

const travelersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    },
})

// collection

const login = new mongoose.model("login", travelersSchema);

module.exports = login;