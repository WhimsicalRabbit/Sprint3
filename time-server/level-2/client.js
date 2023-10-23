const net = require('net');
const port = process.argv[2];
let rawData = "";

const timeServer = port => {
    const client = net.createConnection(port);

    client.on("data", chunk => {
        rawData += chunk;
    })

    client.on("end", () => {
        console.log(rawData)
    })
}

timeServer(port)