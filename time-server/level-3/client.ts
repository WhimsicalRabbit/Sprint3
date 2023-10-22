const net = require('net');
const port = 9090;
let rawData = "";

const netRequest = (port: number) => {

    return new Promise<string>((resolve, reject) => {
        const client = net.createConnection(port);

    client.on("data", (chunk: string) => {
        rawData += chunk;
    })

    client.on("end", () => {
        try {

        } catch(err) {
            reject(err)
        }
        console.log(rawData)
        resolve(rawData)
    })

    client.on("error", reject)
    })
}

netRequest(port)

module.exports = {netRequest}