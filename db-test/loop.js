const fs = require('fs');
const path = require('path');

const logs = path.join(__dirname + "/logs");

const exist = fs.existsSync(logs);
console.log(exist);
if (!!exist) {
  fs.readdir(logs, (err, files) => {
    if (!!err) return console.error("Error:", err);
    files.forEach(file => {

    })
  })
}