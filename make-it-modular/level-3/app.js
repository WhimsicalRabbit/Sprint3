"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mymodule = require('./module.js');
const file = "./test-files/";
const filterExtension = "js";
function callback(err, result) {
    if (err)
        throw err;
    result.forEach((file) => {
        console.log(file);
    });
}
let promisedArray = mymodule(file, filterExtension, callback);
module.exports = { promisedArray };
