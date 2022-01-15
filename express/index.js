const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("this is home page");
});
app.post("/", (req, res) => {
  res.send("this is home page with post request");
});

app.listen(3000, () => {
  console.log("application started on 3000 port");
});
