const { server, listening } = require("./server.js");

url = 4040;

describe('connection', () => {
    beforeAll( done => {
        if (listening == true) {
            done()
        }
    })

    afterAll( done => {
        server.close(done)
    })

    it('should return the string in all caps', async () => {
        return fetch ("http://127.0.0.1:4040/", {
        method: "POST",
        headers:{
            'Content-Type': 'text/html; charset=UTF-8'
          },
        body: JSON.stringify({
            "message": "The ocean washed over your grave"
        })
    }).then( res => {
        return res.json()
    }).then( data => {
        expect(data).toEqual({"MESSAGE": "THE OCEAN WASHED OVER YOUR GRAVE"});
    })
    });

});