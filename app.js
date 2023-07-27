require("dotenv").config();
const cors = require("cors");
const path = require("path");

const express = require("express");
const app = express();
app.use(cors());

console.log(process.env.URL);
const notFoundMw = require("./middleware/not-found");
const errorMw = require("./middleware/error-handler");
const connectDB = require("./db/connect");

const Router = require("./routes/survey");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/survey", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/survey.html"));
});
app.use("/survey/result", Router);

// app.post("/survey/result", (req, res) => {
//   console.log(req.body);
// });
app.use(notFoundMw);
app.use(errorMw);

port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.URL);
    app.listen(port, console.log(`Listening on server ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
