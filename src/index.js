const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user");
const InitiateMongoServer = require("./config/db");
const { check, validationResult } = require("express-validator");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});


app.use("/user", user);

app.listen(4004, () => {
  console.log('Express server started at port : 4004');
});
