"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const net = require('net');
const port = 9090;
let rawData = "";
const netRequest = (port) => {
    return new Promise((resolve, reject) => {
        const client = net.createConnection(port);
        client.on("data", (chunk) => {
            rawData += chunk;
        });
        client.on("end", () => {
            try {
            }
            catch (err) {
                reject(err);
            }
            console.log(rawData);
            resolve(rawData);
        });
        client.on("error", reject);
    });
};
netRequest(port);
module.exports = { netRequest };
