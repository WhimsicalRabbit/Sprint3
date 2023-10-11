const net = require('net')

const now = () => {
    let date = new Date();
    const f = new Intl.DateTimeFormat("fr-CA", {
        dateStyle: "short",
    })
    return f.format(date) + " " + date.getHours() + ":" + date.getMinutes()
}

 const server = net.createServer((socket) => {
    socket.end(now() + "\n")
 })

server.listen(process.argv[2])