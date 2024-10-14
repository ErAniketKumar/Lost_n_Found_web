const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const createToken=(res, userId)=>{
    const token = jwt.sign({userId}, JWT_SECRET, {expiresIn:"1h"});

    res.cookie("token", token, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        sameSite: 'None',
        secure: true 
    });
    return token;
}
module.exports = createToken;




