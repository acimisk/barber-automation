const express = require("express");
const router = express.Router();

const {
    createAppointment,
    getAppointments,
    deleteAppointment
} = require("../controllers/appointmentController");
const auth = require("../middleware/auth");

router.post("/", createAppointment);
router.get("/", getAppointments);
router.delete("/:id", auth , deleteAppointment);

module.exports = router;