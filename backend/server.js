const dotenv = require("dotenv")
dotenv.config()

const express = require("express")
const cors = require("cors") 

const connectDB = require("./config/db")
const appointmentRoutes = require("./routes/appointmentRoutes")

const app = express();

connectDB();

app.use(cors())
app.use(express.json())

app.use("/api/appointments",appointmentRoutes)

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server ${PORT} portunda çalışıyor.`)
})
