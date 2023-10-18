const fs = require('node:fs');
const filePath = process.argv[2];

fs.readFile(filePath, "utf8", (err, data) => {
    if (err) throw err
    else console.log(data.split("\n").length -1)
})