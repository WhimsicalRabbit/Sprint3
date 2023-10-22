const {httpGet} = require("./client.js")

const http = require('http');
let url = "http://127.0.0.1:7070/"

describe('connection', () => {

    let server;

    beforeAll( done => {
        server = http.createServer((req, res) => {
            if (req.url == "/") {
            res.writeHead(200, {"content-type": "plain/text"})
            res.write("The ancients saw it coming")
            res.write("You can see that they tried to warn them")
            res.write("In the tales that they told their children")
            res.write("But they fell out of their heads in the morning")
            res.end()
            } else {
                res.writeHead(404)
                res.end()
            }
        }).listen(7070, done)
    })

    afterAll( done => {
        server.close(done)
    })

    it('should retrive an array containing all the data in one index and the lenght of it in the secon one', () => {
        return httpGet(url).then( data => {
            expect(data[0]).toBe("The ancients saw it coming. You can see that they tried to warn them. In the tales that they told their children. But they fell out of their heads in the morning. ");
            expect(data[1]).toBe(163);
        })
    });
});
