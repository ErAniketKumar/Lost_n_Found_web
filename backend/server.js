const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const port = process.env.PORT || 5000;
const connectDB = require("./config/databaseConnection")

connectDB();


const userAuthRoute = require("./routes/userAuthRoute");

app.use("/api",userAuthRoute);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
