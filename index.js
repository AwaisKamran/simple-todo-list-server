const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = 8081;

let list = [
  {
    id: 1,
    completed: false,
    userId: 1,
    title: "hello world",
  },
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/todos", (req, res) => {
  res.json(list);
});

app.post("/todos", (req, res) => {
  list.push(req.body);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});
