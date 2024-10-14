const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");

dotenv.config();
const allowedOrigins = [
  'https://https://mayihelpyou-mq14ts3k8-anikets-projects-3e38dd37.vercel.app', // Your deployed frontend URL
  'http://localhost:5173',            // Localhost for development
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true // Allow credentials if needed
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const port = process.env.PORT || 5000;
const connectDB = require("./config/databaseConnection")

connectDB();


const router = require("./routes/thisRoutes");

app.use("/api",router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
