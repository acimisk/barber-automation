const dotenv = require("dotenv")
dotenv.config()

const express = require("express")
const cors = require("cors") 

const connectDB = require("./config/db")
const appointmentRoutes = require("./routes/appointmentRoutes")
const adminRoutes = require("./routes/adminRoutes")
const app = express();

connectDB();

app.use(cors())
app.use(express.json())

app.use("/api/appointments",appointmentRoutes)
app.use("/api/auth",adminRoutes)
const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server ${PORT} portunda çalışıyor.`)
})