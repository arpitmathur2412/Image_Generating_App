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


app.listen(5000, () => {
  console.log("server started at http://localhost:5000");
})
