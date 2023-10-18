const http = require('http')
const port = 4040
const hostname = "127.0.0.1"

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "plain/text"})
    res.end(`
    Those are you got some nice shoulders
    I'd like to put my hands around them
    I'd like to put my hands around them
    `)
}).listen(port, hostname, () => {
    console.log(`Connect on http://${hostname}:${port}/`)
})