const fs = require("fs");

const myReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
myReadStream.on("data", (chunk) => {
  console.log(chunk);
});
