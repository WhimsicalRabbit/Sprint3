const net = require('net')
const port = 9090

const now = () => {
    let date = new Date();
    const f = new Intl.DateTimeFormat("fr-CA", {
        dateStyle: "short",
    })
    return f.format(date) + " " + date.getHours() + ":" + date.getMinutes()
}

 const server = net.createServer((socket: any) => {
    socket.write(now() + "\n")
    socket.end()
 })

server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

let listening = server.listening;

module.exports = {server, listening}