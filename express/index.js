const express = require("express");
const handle = require("./handle");
const app = express();

app.locals.title = "Node JS Application";
app.get("/", handle);
app.listen(3000, () => {
  console.log("application started on 3000 port");
});
