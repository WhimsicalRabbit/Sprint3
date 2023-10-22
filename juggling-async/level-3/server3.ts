const http = require('http')
const port = 1010
const hostname = "127.0.0.1"

const server = http.createServer((_req: Request, res: any) => {
    res.writeHead(200, {"content-type": "plain/text"})
    res.end("But I dont wanna die, I dont wanna die.")
}).listen(port, hostname, () => {
    console.log(`Connect on http://${hostname}:${port}/`)
})
