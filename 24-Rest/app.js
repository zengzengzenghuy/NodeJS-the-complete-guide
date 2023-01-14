const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const feedRouters = require("./routes/feed");
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});
app.use("/feed", feedRouters);
app.listen(8080);
