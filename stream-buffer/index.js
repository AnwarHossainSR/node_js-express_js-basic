const fs = require("fs");

const myReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, "utf8");
myReadStream.on("data", (data) => {
  console.log(data);
});
