"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const filePath = "/Users/Gaby/Documents/Course/Sprint3/test-files/text.txt";
let str = fs.readFileSync(filePath, 'utf8').split("\n").length - 1;
console.log(str);
module.exports = { str };
