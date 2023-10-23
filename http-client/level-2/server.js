const http = require('http')
const port = 8080
const hostname = "127.0.0.1"

const server = http.createServer((req, res) => {
    if (req.url == "/") {
    res.writeHead(200, {"content-type": "plain/text"})
    res.end("I think that evil is an idea created by others to avoid dealing with their own nature.")
    } else {
        res.writeHead(404)
        res.end()
    }
}).listen(port, hostname, () => {
    console.log(`Connect on http://${hostname}:${port}/`)
})
