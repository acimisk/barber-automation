const express = require("express");
const router = express.Router();

const {
    createAppointment,
    getAppointments,
    deleteAppointment,
    updateAppointmentStatus
} = require("../controllers/appointmentController");
const auth = require("../middleware/auth");

router.post("/", createAppointment);
router.get("/", getAppointments);
router.delete("/:id", auth , deleteAppointment);
router.patch("/:id/status", auth, updateAppointmentStatus);
module.exports = router;