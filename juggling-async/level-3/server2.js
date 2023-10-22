"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require('http');
const port = 2020;
const hostname = "127.0.0.1";
const server = http.createServer((_req, res) => {
    res.writeHead(200, { "content-type": "plain/text" });
    res.end("Keep smoking, I still love you. ");
}).listen(port, hostname, () => {
    console.log(`Connect on http://${hostname}:${port}/`);
});
