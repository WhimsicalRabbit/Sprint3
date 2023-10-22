const fs = require('fs')
const filePath = "./test-files/text.txt"

let str = fs.readFileSync(filePath,'utf8').split("\n").length -1;

console.log(str)

module.exports = {str}