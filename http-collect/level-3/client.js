"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require('http');
const url = "http://127.0.0.1:7070/";
let rawData = "";
let resultTesting = [];
const httpGet = (url) => {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            if (res.statusCode !== 200)
                throw new Error("request failed");
            res.setEncoding("utf8");
            res.on("data", (chunk) => {
                rawData += chunk + ". ";
            });
            res.on("end", () => {
                try {
                }
                catch (err) {
                    return reject(err);
                }
                console.log(rawData.length);
                console.log(rawData);
                resultTesting.push(rawData);
                resultTesting.push(rawData.length);
                resolve(resultTesting);
            });
            res.on("error", reject);
        });
    });
};
httpGet(url);
module.exports = { httpGet };
