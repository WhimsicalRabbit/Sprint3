const http = require('http');

const postData = JSON.stringify({
    "message": "The ocean washed over your grave"
});

const options = {
    hostname: "127.0.0.1",
    port: process.argv[2],
    path: "/",
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
};

const req = http.request(options, (res) => {
    res.setEncoding("utf8")
    
    res.on("data", (chunk) => {
        console.log(`BODY: ${chunk}`)
    });
});

req.on("error", (e) => {
    console.error(`problem with request: ${e.message}`);    
});

req.write(postData);
req.end();