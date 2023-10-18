const fs = require('fs')
const filePath = process.argv[2]

let buffer = fs.readFileSync(filePath,'utf8');

let str = buffer.split("\n").length -1;

console.log(str)