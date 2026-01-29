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

exports.updateAppointmentStatus = async (req,res) =>{
    try{
        const{status} = req.body;

        const appointment = await Appointment.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );

        if(!appointment) return res.status(404).json({message: "Randevu bulunamadı" });

        res.json({
            message: "Durum güncellendi",
            appointment
        });
    } catch(err) {
        res.status(500).json({ message: "Hata oluştu" })
    }
};

exports.deleteAppointment = async (req, res) => {
    const appointmentID = req.params.id;
    const deleted = await Appointment.findByIdAndDelete(appointmentID);
    
     if (!deleted) {
    return res.status(404).json({
      message: "Böyle bir randevu bulunamadı"
        });
    }
    res.json({ message: `${appointmentID} ID'li randevu silindi` });
};