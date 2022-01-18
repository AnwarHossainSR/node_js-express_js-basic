const express = require("express");
const handle = require("./handle");
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.json());
app.use(cookieParser());

app.locals.title = "Node JS Application";
app.get("/", handle);
app.get("/user/:id", (req, res) => {
  res.send("get request");
  console.log(req.params);
  console.log(req.baseUrl);
  console.log(req.originalUrl);
  console.log(req.query);
  console.log(req.method);
  console.log(req.cookies);
  //console.log(req.app);
  console.log(req.route);
});
app.post("/post", (req, res) => {
  console.log(req.body);
  res.send("post request");
});

app.listen(3000, () => {
  console.log("application started on 3000 port");
});
