const http = require('http')
const fs = require('fs')
const port = process.argv[2]
const streamDir = process.argv[3]

const server = http.createServer((req, res) => {
    fs.createReadStream(streamDir, "utf8").pipe(res)
})

server.listen(port)