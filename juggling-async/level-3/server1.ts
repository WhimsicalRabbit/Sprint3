const http = require('http')
const port = 3030
const hostname = "127.0.0.1"

const server = http.createServer((_req: Request, res: any) => {
    res.writeHead(200, {"content-type": "plain/text"})
    res.end("Keep smoking, I love. ")
}).listen(port, hostname, () => {
    console.log(`Connect on http://${hostname}:${port}/`)
})