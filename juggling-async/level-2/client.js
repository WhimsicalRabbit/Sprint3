const http = require('http');
const bl = require('bl');
const Order = [];
let count = 0;

const printText = () => {
    for(let i = 0; i < 3; i++) console.log(Order[i])
}

function get(index) {
    http.get(process.argv[2 + index], (res) => {
        res.pipe(bl (function(err, data) {
            if (err) throw err;

            Order[index] = data.toString()
            count++

            if(count === 3) {
                printText()
            }
        }))
    })
}

for(let i = 0; i < 3; i++) get(i)