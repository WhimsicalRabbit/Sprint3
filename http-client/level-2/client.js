const http = require('http')
const url = process.argv[2];

http.get (url, (res) => {
    const {statusCode} = res;

    if (res.statusCode !== 200) {
        throw new Error("Request failed")
    }

    res.setEncoding("utf8");

    let rawData = '';
    res.on("data", (chunk) => {
        rawData += chunk
        console.log(rawData)
    })

})