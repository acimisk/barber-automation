const dotenv = require("dotenv")
const express = require("express")
const cors = require("cors") 
const mongoose = require("mongoose")
const app = express();

dotenv.config()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB bağlandı"))
    .catch(err => console.error("MongoDB Hatası",err))

    const appointmentSchema = new mongoose.Schema({
        name: String,
        phone: String,
        date: String,
        time: String,
        service: String,
        price: Number,
        notes: String,
    });

    const Appointment = mongoose.model("Appointment", appointmentSchema)


app.post("/api/appointments", async (req,res)=>{
  try{
    const appointment = new Appointment(req,body);
    await appointment.save();
    res.status(201).json({message:"Randevu kaydedildi"});
  } catch(err){
    res.status(500).json({message:"Hata oluştu", error: err});
  }
});

app.get("/api/appointments", async (req,res)=>{
  try{
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch(err){
    res.status(500).json({message:"Hata oluştu", error: err})
  }
});
console.log("test commit")
const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server ${PORT} portunda çalışıyor.`)
})
