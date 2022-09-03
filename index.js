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

//Create
app.post("/todos", (req, res) => {
  list.push(req.body);
  res.sendStatus(200);
});

//Read
app.get("/todos", (req, res) => {
  res.json(list).sendStatus(200);
});

//Update
app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const formattedId = parseInt(id);

  if (!isNaN(formattedId)) {
    list.forEach((item) => {
      if (item.id === formattedId) {
        item.completed = !item.completed;
        res.status(200).json({ success: true, msg: "Item has been updated" });
      }
    });
  } else {
    res.status(400).json({ error: "Invalid Parameter" });
  }
});

//Delete
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  const formattedId = parseInt(id);

  if (!isNaN(formattedId)) {
    list = list.filter((item) => item.id !== formattedId);
    res.sendStatus(200);
  } else {
    res.status(400).json({ error: "Invalid Parameter" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});
