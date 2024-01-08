const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
var bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const AuthorRoute = require("./routes/author");
const BookRoute = require("./routes/book");

dotenv.config();

//connect database
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("connect to mongodb");
});

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

app.use("/v1/author", AuthorRoute);
app.use("/v1/book", BookRoute);

app.listen(8000, () => {
  console.log("server is running...");
});
