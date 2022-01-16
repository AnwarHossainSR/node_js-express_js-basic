const express = require("express");
const app = express();

const router = express.Router({ caseSensitive: true });
app.use(router);

app.get("/home", (req, res) => {
  res.send("this is home page url");
});
app.post("/", (req, res) => {
  res.send("this is home page with post request");
});

app.listen(3000, () => {
  console.log("application started on 3000 port");
});
