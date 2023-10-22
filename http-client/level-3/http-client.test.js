let url = "http://127.0.0.1:8080/"

const http = require('http');
const {httpGet} = require("./client");

describe('connection', () => {
    let server;

beforeAll((done) => {
    server = http.createServer((_req, res) => {
    res.writeHead(200, {"content-type": "plain/text"})
    res.end("plain text")
}).listen(8080, done)
}) 

afterAll((done) => {
    server.close(done);
})

it('should receive server data', async () => {
    return httpGet(url).then(data => {
    expect(data).toBe("plain text");
})
});

});
