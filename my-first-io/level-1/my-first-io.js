const fs = require('fs')

let buffer = fs.readFileSync(process.argv[2],'utf8');

let str = buffer.split("\n").length - 1

console.log(str)