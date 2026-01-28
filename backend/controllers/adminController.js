const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req,res) =>{
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });

    if(!admin) return res.status(401).json({message:"Hatalı bilgiler"})

    const isMatch = await bcrypt.compare({ message:"Hatalı bilgiler"})

    const token = jwt.sign(
        { id: admin._id},
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    res.json( {token} )
};


exports.createAdmin = async (req,res) =>{
    const { username, password} = req.body;

    const hashedPassword = await bcrypt.hash(password,10);

    const admin = new Admin({
        username,
        password: hashedPassword
    });

    await admin.save();

    res.json({message:"Admin oluşturuldu"})

}