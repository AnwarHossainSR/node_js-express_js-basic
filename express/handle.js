const handle = (req, res) => {
  console.log(req.app.locals.title);
  res.send("this is back call");
};

module.exports = handle;
