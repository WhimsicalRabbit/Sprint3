"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require('http');
const port = 7070;
const hostname = "127.0.0.1";
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, { "content-type": "plain/text" });
        res.write(`
    Last night I dreamed he was trying to kill you
    I woke up and I was trying to kill you
    It's been a year since we first met
    I don't know if we're boyfriends yet\n
    `);
        res.write(`The ancients saw it coming
    You can see that they tried to warn them
    In the tales that they told their children
    But they fell out of their heads in the morning
    `);
        res.end();
    }
    else {
        res.writeHead(404);
        res.end();
    }
}).listen(port, hostname, () => {
    console.log(`Connect on http://${hostname}:${port}/`);
});
