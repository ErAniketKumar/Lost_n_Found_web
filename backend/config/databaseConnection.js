const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		const dbOptions = {
			dbName: process.env.DB_NAME,
			connectTimeoutMS: 30000, // Increase timeout for connection
		};
		await mongoose.connect(process.env.MONGODB_URL, dbOptions);
		console.log("DB Connected Successfully");
	} catch (error) {
		console.error("DB Connection Error:", error.message);
		process.exit(1); // Exit process with failure
	}
};

module.exports = connectDB;
