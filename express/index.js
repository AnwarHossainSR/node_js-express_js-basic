const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("this is home page");
});
app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.body.name);
  console.log(typeof req.body);
  res.send("this is home page with post request");
});

app.listen(3000, () => {
  console.log("application started on 3000 port");
});
