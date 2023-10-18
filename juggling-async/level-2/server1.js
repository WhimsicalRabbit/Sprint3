const http = require('http')
const port = 6060
const hostname = "127.0.0.1"

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "plain/text"})
    res.end(`
    Well, so what?
    We're young
    We're thin (most of us)
    We're alive (most of us)
    `)
}).listen(port, hostname, () => {
    console.log(`Connect on http://${hostname}:${port}/`)
})