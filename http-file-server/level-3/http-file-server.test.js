const { server, listening } = require("./server.js")
const http = require('http');

const url = "http://127.0.0.1:6060/"

const httpGet = (url) => {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            res.setEncoding("utf8");

            let rawData = "";
            
            res.on("data", (chunk) => {
                rawData += chunk + ". ";
            })

            res.on("end", () => {
                try {

                } catch (err) {
                    reject(err)
                }

                resolve(rawData)
            })

            res.on("error", reject)
        })
    })
}

describe('connection', () => {
    
    beforeAll( done => {
        if (listening === true) {
            done()
        }
    })

    afterAll( done => {
        server.close(done)
    })

    it('should return the contents of the readdir stream', async () => {
        return httpGet(url).then( data => {
            expect(data).toBe("bunny gang bunny gang. ");
        })
    });
});