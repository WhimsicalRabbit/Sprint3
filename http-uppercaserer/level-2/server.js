const http = require('http');
const map = require('through2-map'); 
const port = 8080;

const server = http.createServer((req, res) => {
    if (req.method !== "POST") {
        return res.end("send me a POST request\n")
    }

    req.pipe(map((chunk) => {
        return chunk.toString().toUpperCase()
    })).pipe(res)
    
}).listen(port, () => {
    console.log(`listening on port ${port}`)
})
p