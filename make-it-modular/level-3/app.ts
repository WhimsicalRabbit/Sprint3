const mymodule = require('./module.js')
const file = "./test-files/";
const filterExtension = "js";

function callback (err: Error, result: any) {
    if (err) throw err 
    result.forEach((file: any) => {
        console.log(file); 
    })
}

let promisedArray = mymodule(file, filterExtension, callback)

module.exports = { promisedArray }