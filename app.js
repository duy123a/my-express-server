const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
// To handle multipart/form-data request that support file upload, you need to use multer module.
app.use(bodyParser.urlencoded({ extended: true })); // normal form without file upload
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// %20 = space

app.post("/", (req, res) => {
  const city = req.body.cityName;
  console.log(city);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ff5f5a41510fff0ee1fdad65bc678da6&units=metric`;
  https.get(url, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      res.write(`<h1>The temperature in ${city} is ${temp}</h1>`);
      res.write(`<p>The weather is currently ${description}</p>`);
      res.write(`<img src='http://openweathermap.org/img/wn/${icon}@2x.png'/>`);
      res.send();
    });
  });
});

// const city = "London";
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ff5f5a41510fff0ee1fdad65bc678da6&units=metric`;
//   https.get(url, (response) => {
//     response.on("data", (data) => {
//       const weatherData = JSON.parse(data);
//       const temp = weatherData.main.temp;
//       const description = weatherData.weather[0].description;
//       const icon = weatherData.weather[0].icon;
//       res.write(`<h1>The temperature in London is ${temp}</h1>`);
//       res.write(`<p>The weather is currently ${description}</p>`);
//       res.write(`<img src='http://openweathermap.org/img/wn/${icon}@2x.png'/>`);
//       res.send();
//     });
//   });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
