const createToken = require("../utils/createToken");
const asyncHandler = require("../middleware/asyncHandler");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

const Login = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await userModel.findOne({ email });

		if (!user) {
			return res.status(401).json({ message: "Invalid Email or Password" });
		}

		const isPasswordValidate = await bcrypt.compare(password, user.password);
		if (isPasswordValidate) {
			createToken(res, user._id);
			res.status(200).json({
				message: "Login Successful",
				user: {
					_id: user._id,
					username: user.username,
					email: user.email,
				},
			});
		} else {
			return res.status(401).json({ message: "Invalid Email or Password" });
		}
	} catch (error) {
		console.error("Login error:", error);
		res.status(500).json({ message: "Internal server error" });
	}
});

const Signup = asyncHandler(async (req, res) => {
	const { username, email, number, password } = req.body;
	try {
		if (!username || !email || !password) {
			res.status(500).json({ message: "All input are Required" });
		}
		const userExist = await userModel.findOne({ email });
		if (userExist) {
			return res.status(409).json({ message: "User Already Exists" });
		}
		const salt = await bcrypt.genSalt(10);
		const hashPassword = await bcrypt.hash(password, salt);

		const user = new userModel({ username, email,number, password: hashPassword });
		await user.save();
		createToken(res, user._id);
		res.status(201).json({ message: "User Created Successfully" });
		
	} catch (error) {
		console.error("Signup error:", error);
		res.status(500).json({ message: "Internal server error" });
	}
});

const Logout = asyncHandler(async (req, res) => {
    
    // Clear the token cookie
    res.clearCookie("token", {
        httpOnly: true, // Ensure the cookie is inaccessible to client-side scripts
        path: '/' // Specify the path to clear the cookie from
    });
    
    res.status(200).json({ message: "Logout Successfully" });
});

const GetUserId = asyncHandler(async (req, res) => {
	const user = req.user;
	res.json({userId: user.userId});
});

const getUserInformation = asyncHandler(async(req,res)=>{
	const {id} = req.params;
	const userData = await userModel.findById(id);
	res.status(200).json({userData});
})

module.exports = { Login, Signup, Logout, GetUserId,getUserInformation };
