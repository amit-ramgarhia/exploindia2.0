const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    members: {
        type: Number,
        required: true
    },
    arriving_date: {
        type: String,
        required: true
    },
    leaving_date: {
        type: String,
        required: true
    },


})

// collection

const Booking = new mongoose.model("Booking", bookingSchema);

module.exports = Booking;