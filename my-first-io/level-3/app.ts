const fs = require('fs')
const filePath = "./text-sample.txt"

let str = fs.readFileSync(filePath,'utf8').split("\n").length -1;

console.log(str)

module.exports = {str}