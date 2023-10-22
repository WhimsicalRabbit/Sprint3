const { netRequest } = require("./client.js")
const { server, listening } = require("./server.js")

describe('connection', () => {
    beforeAll((done) => {
        if (listening == true) {
            done()
        }
    });

    afterAll((done) => {
        server.close(done)
    });

    const now = () => {
        let date = new Date();
        const f = new Intl.DateTimeFormat("fr-CA", {
            dateStyle: "short",
        })
        return f.format(date) + " " + date.getHours() + ":" + date.getMinutes()
    }

    it('should return the time', async () => {
        let equaltime = now()
        return netRequest(9090).then( data => {
            expect(data).toMatch(equaltime);
        })
    });
});