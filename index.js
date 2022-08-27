const express = require("express");

const app = express();

const PORT = 8081;

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});
