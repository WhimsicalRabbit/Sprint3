const http = require('http')
const port = 5050
const hostname = "127.0.0.1"

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "plain/text"})
    res.end(`
    Don't you realize our bodies could fall apart at any second?
    I am terrified your body could fall apart at any second
    `)
}).listen(port, hostname, () => {
    console.log(`Connect on http://${hostname}:${port}/`)
})