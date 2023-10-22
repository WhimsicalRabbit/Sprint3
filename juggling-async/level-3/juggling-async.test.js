const http = require('http');
const { httpGet } = require("./client");

describe('Connection', () => {

    let server1;
    let server2;
    let server3;

    beforeAll ( done => {
        server1 = http.createServer((_req, res) => {
            res.writeHead(200, {"content-type": "plain/text"})
            res.end("Keep smoking, I love. ")
        }).listen(3030)

        server2 = http.createServer((_req, res) => {
            res.writeHead(200, {"content-type": "plain/text"})
            res.end("Keep smoking, I still love you. ")
        }).listen(2020)

        server3 = http.createServer((_req, res) => {
            res.writeHead(200, {"content-type": "plain/text"})
            res.end("But I dont wanna die, I dont wanna die.")
        }).listen(1010, done)
    })

    afterAll( done => {
        server1.close();
        server2.close();
        server3.close(done);
    })

    it('The array should be filled with all the data in order', async () => {
        return httpGet().then( data => {
            expect(data).toBe("Keep smoking, I love. Keep smoking, I still love you. But I dont wanna die, I dont wanna die.");
        })
    });
});