const http = require('http')
const fs = require('fs')
const port = 6060
const streamDir = "./test-files/text.txt"

const server = http.createServer((_req: any, res: any) => {
    fs.createReadStream(streamDir, "utf8").pipe(res);
})

server.listen(port);

let listening = server.listening;

module.exports = {server, listening}