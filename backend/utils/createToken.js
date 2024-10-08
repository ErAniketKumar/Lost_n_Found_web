const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const createToken=(res, userId)=>{
    const token = jwt.sign({userId}, JWT_SECRET, {expiresIn:"30d"});

    res.cookie("jwt",token,{
        httpOnly:true,
        secure:true,
        sameSite:"strict",
        maxAge:30*24*60*60*1000
    });
    return token;
}
module.exports = createToken;