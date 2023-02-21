const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// To handle multipart/form-data request that support file upload, you need to use multer module.
app.use(bodyParser.urlencoded({ extended: true })); // normal form without file upload
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);
  const result = num1 + num2;
  res.send("The result is " + result);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
