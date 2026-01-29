const jwt = require("jsonwebtoken");

module.exports = (req,res,next) => {
    const authHeader = req.header("Authorization");
    const token = authHeader.split(" ")[1];

    if(!token) return res.status(401).json({ message: "Token yok" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.adminId = decoded.id;
        next();
    } catch {
        res.status(401).json({message: "Token geçersiz"})
    }
};