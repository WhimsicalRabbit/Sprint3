const fs = require('node:fs');

let buffer = fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) {
        throw err
    } else {
       console.log( data.split("\n").length - 1)
    }
})