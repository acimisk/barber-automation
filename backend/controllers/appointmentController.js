const Appointment = require("../models/Appointment");

exports.createAppointment = async (req,res)=> {
    try{
        const appointment = await Appointment.create(req.body);

        res.status(201).json({
            message:"Randevu kaydedildi",
            appointment
        });
    } catch(err){
        res.status(500).json({
            message:"Hata oluştu!",
            error: err.message
        });
    }
};

exports.getAppointments = async(req,res)=>{
    try{
        const appointments = await Appointment.find().sort({ createdAt:-1 });

        res.json(appointments);
    } catch(err){
        res.status(500).json({
            message:"Hata oluştu",
            error:err.message
        });
    }
};