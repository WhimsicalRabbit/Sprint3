"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require('http');
const port = "http://127.0.0.1:8080/";
function httpGet(port) {
    return new Promise((resolve, reject) => {
        http.get(port, (res) => {
            res.setEncoding("utf8");
            let rawData = '';
            res.on("data", (chunk) => {
                rawData += chunk;
                console.log(rawData);
            });
            res.on("end", () => {
                try {
                }
                catch (err) {
                    reject(err);
                }
                resolve(rawData);
            });
            res.on("error", reject);
        });
    });
}
httpGet(port);
module.exports = { httpGet };
