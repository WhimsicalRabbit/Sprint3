const { server, listening, pathHandler, unixTime, parseTime } = require("./server.js")
const http = require('http');

let url1 = `http://127.0.0.1:5050/api/parsetime?iso=2013-08-10T12:10:15.474Z`
let url2 = `http://127.0.0.1:5050/api/unixtime?iso=2013-08-10T12:10:15.474Z`

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
        if (listening == true) {
            done()
        }
    })

    afterAll( done => {
        server.close(done)
    })

    it('First endpoint', async () => {
        return httpGet(url1).then( data => {
            expect(data).toBe("{\"hour\":14,\"minute\":10,\"second\":15}. ");
        })
    });

    it('Second enpoint', async () => {
        return httpGet(url2).then( data => {
            expect(data).toBe("{\"unixtime\":1376136615474}. ");
        })
    });
});