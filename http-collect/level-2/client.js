const http = require('http');
const url = process.argv[2];
let rawData = "";

http.get(url, (res) => {
    if (res.statusCode !== 200) throw new Error("request failed");

    res.setEncoding("utf8");

    res.on("data", chunk => {
        rawData += chunk;
    })
    res.on("end", () => {
        console.log(rawData.length);
        console.log(rawData)
    })
})
