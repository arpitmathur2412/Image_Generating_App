const express = require("express");
const body_parser = require("body-parser");
const http = require("http")
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json())


app.get("/api", async (req, res) => {
  res.send("hello")
})

// app.post("/api", async (req, res) => {

//   const url = 'https://openai80.p.rapidapi.com/images/generations';
//   const options = {

//     method: 'POST',
//     headers: {
//       'content-type': 'application/json',
//       'X-RapidAPI-Key': 'da528dbcf7msha4a0b38bb43f887p139209jsn3728a1f42152',
//       'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
//     },
//     body: JSON.stringify({
//       prompt: req.body.prompt,
//       n: 1,
//       size: '1024x1024'
//     })
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// })

app.listen(5000, () => {
  console.log("server started at http://localhost:5000");
})