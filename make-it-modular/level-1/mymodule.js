const fs = require('node:fs');
const path = require('node:path');

module.exports = function (file, filter, callback) {
    fs.readdir(file, function (err, list) {
    if (err) return callback(err) 
    else { 
        list = list.filter(function (file)  {
            if(path.extname(file) === "." + filter) {return true}
        })
        return callback(null, list)
     }
})}

