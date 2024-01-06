const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
var bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

dotenv.config();
//connect database
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("connect to mongodb");
});

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

app.get("/api", (req, res) => {
  res.status(200).json("hello");
});

app.listen(8000, () => {
  console.log("server is running...");
});
