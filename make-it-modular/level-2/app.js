const mymodule = require('./module.js')
const file = process.argv[2];
const filterExtension = process.argv[3];

const callback = function (err, result) {
    if (err) throw err 
    result.forEach(function (file) {
        console.log(file); 
    })
}


mymodule(file, filterExtension, callback)