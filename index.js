// imports
const express = require("express");
const app = express();
const cors = require("cors");

// video routes
const videos = require("./routes/videos");

// set responses in json, public folder
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

// console log all requests
app.use((req, _res, next) => {
  console.info(`Incoming request from ${req.originalUrl}`);
  next();
});

// get the main page
app.get("/", (_req, res) => {
  res.send("I'm here, yo");
});

app.use("/videos", videos);

app.listen(8888, () => {
  console.info(`Server running on port ${8888}`);
});
