const express = require("express");
const morgan = require("morgan");
const app = express();
const bodyparser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

const PORT = 3000 || 8080;

//log requests
app.use(morgan("tiny"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set view engine
app.set("view engine", "ejs");
app.set("views", "views");
// for folder
// app.set("views", path.resolve(__dirname, "views/ejs"));

//load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
mongoose
  .connect("mongodb://localhost/login", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((areed) => {
    console.log("MongoDB is connected.");
  });

//load routers
app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
