const express = require("express");
const data = require("./data.json");

const app = express();

app.get("/town", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(data);
});

app.listen(3000, () => {
  console.log(`서버 온`);
});
