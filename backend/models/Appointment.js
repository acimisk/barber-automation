const mongoose = require("mongoose")

const appointmentSchema = new mongoose.Schema({
        name: String,
        phone: String,
        date: String,
        time: String,
        service: String,
        price: Number,
        notes: String,
}, {timestamps: true });

module.exports = mongoose.model("Appointment",appointmentSchema)