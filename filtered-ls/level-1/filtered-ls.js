const fs = require('node:fs');
const path = require('node:path');

const file = process.argv[2];
const filter = "." + process.argv[3];

fs.readdir(file, (err, list) => {
    if (err) {
        throw err
    } else {
        list.forEach((file) => {
            if (path.extname(file) == filter) 
            console.log(file)
        })
    }
})