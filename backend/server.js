const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");

dotenv.config();
app.use(cors({
  origin: 'https://lost-n-found-web.vercel.app', // Allow your Vercel domain
  credentials: true // Enable credentials (cookies)
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
