const express = require("express");
const { 데이터얻기 } = require("./createData");

const app = express();

app.get("/town", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(데이터얻기());
});

app.listen(3000, () => {
  console.log(`서버 온`);
});
