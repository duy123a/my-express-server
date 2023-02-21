const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact me pls</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>I am Duy Ho Duc, a wanderer in the midnight</h1>");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
