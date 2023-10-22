"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require('http');
const bl = require('bl');
const urlArray = ["http://127.0.0.1:3030/", "http://127.0.0.1:2020/", "http://127.0.0.1:1010/"];
const httpGet = () => {
    return new Promise((resolve, reject) => {
        http.get(urlArray[0], (res) => {
            let bit1 = "";
            res.setEncoding("utf8");
            res.on("data", (chunk) => {
                bit1 += chunk;
            });
            res.on("error", (err) => {
                reject(err);
            });
            res.on("end", () => {
                http.get(urlArray[1], (res) => {
                    let bit2 = "";
                    res.setEncoding("utf8");
                    res.on("data", (chunk) => {
                        bit2 += chunk;
                    });
                    res.on("error", (err) => {
                        reject(err);
                    });
                    res.on("end", () => {
                        http.get(urlArray[2], (res) => {
                            let bit3 = "";
                            let finalData = "";
                            res.setEncoding("utf8");
                            res.on("data", (chunk) => {
                                bit3 += chunk;
                            });
                            res.on("error", (err) => {
                                reject(err);
                            });
                            res.on("end", () => {
                                finalData = bit1 + bit2 + bit3;
                                console.log(finalData);
                                resolve(finalData);
                            });
                        });
                    });
                });
            });
        });
    });
};
module.exports = { httpGet };
