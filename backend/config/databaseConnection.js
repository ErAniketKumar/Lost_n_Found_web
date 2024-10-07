const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		const dbOptions = {
			dbName: process.env.DB_NAME,
		};
		await mongoose.connect(process.env.MONGODB_URL, dbOptions);
		console.log("DB Connected Successfully");
	} catch (error) {
		console.log(error);
	}
};

module.exports = connectDB;
