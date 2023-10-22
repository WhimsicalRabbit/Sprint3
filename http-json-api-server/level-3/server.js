"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require('http');
var url = require('url');
const port = 5050;
const parseTime = (time) => {
    let obj = {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    };
    return obj;
};
const unixTime = (time) => {
    return { unixtime: time.getTime() };
};
const pathHandler = (url) => {
    const now = new Date(url.query.iso);
    switch (url.pathname) {
        case "/api/parsetime":
            return parseTime(now);
            break;
        case "/api/unixtime":
            return unixTime(now);
        default: return "Please enter a valid endpoint URL";
    }
};
const server = http.createServer((req, res) => {
    if (req.method == "GET") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const urlVar = url.parse(req.url, true);
        res.end(JSON.stringify(pathHandler(urlVar)));
    }
    else {
        res.writeHead(405);
        res.end();
    }
});
server.listen(port, () => {
    console.log(`listening in port ${port}`);
    console.log(`
    The path you should introduce to see the results are 
    ParseTime: "localhost:${port}/api/parsetime?iso=2013-08-10T12:10:15.474Z"
    Unixtime: "localhost:${port}/api/unixtime?iso=2013-08-10T12:10:15.474Z"
    `);
});
let listening = server.listening;
module.exports = { server, listening, pathHandler, unixTime, parseTime };
