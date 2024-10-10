const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
app.use(cors());
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
