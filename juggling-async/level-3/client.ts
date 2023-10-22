const http = require('http');
const bl = require('bl');
const urlArray: Array<string> = ["http://127.0.0.1:3030/", "http://127.0.0.1:2020/", "http://127.0.0.1:1010/"]


const httpGet = () => {
            return new Promise<string>((resolve, reject) => {
                http.get(urlArray[0], (res: any) => {
                    
                    let bit1 = "";
                    res.setEncoding("utf8");

                    res.on("data", (chunk: string) => {
                        bit1 += chunk;
                    })

                    res.on("error", (err: Error) => {
                        reject(err)
                    })

                    res.on("end", () => {
                        
                            http.get(urlArray[1], (res: any) => {
                                
                                let bit2 = "";
                                res.setEncoding("utf8");
            
                                res.on("data", (chunk: string) => {
                                    bit2 += chunk;
                                })
            
                                res.on("error", (err: Error) => {
                                    reject(err)
                                })
            
                                res.on("end", () => {
                                    http.get(urlArray[2], (res: any) => {
                                
                                        let bit3 = "";
                                        let finalData = "";
                                        res.setEncoding("utf8");
                    
                                        res.on("data", (chunk: string) => {
                                            bit3 += chunk;
                                        })
                    
                                        res.on("error", (err: Error) => {
                                            reject(err)
                                        })
                    
                                        res.on("end", () => {
                                            finalData = bit1 + bit2 + bit3;
                                            console.log(finalData)
                                            resolve(finalData)
                                    })
                                })
                            })
                        })
                    })
                })
            })
        }
module.exports = { httpGet }