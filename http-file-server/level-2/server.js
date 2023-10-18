const http = require('http')
const fs = require('fs')
const port = process.argv[2]
const streamDir = process.argv[3]

http.createServer((_req, res) => {
    fs.createReadStream(streamDir, "utf8").pipe(res);
}).listen(port, () => {
    console.log(`Listening on port ${port}`)
})