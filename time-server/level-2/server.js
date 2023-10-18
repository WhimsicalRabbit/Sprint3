const net = require('net')
const port = process.argv[2]

const now = () => {
    let date = new Date();
    const f = new Intl.DateTimeFormat("fr-CA", {
        dateStyle: "short",
    })
    return f.format(date) + " " + date.getHours() + ":" + date.getMinutes()
}

 const server = net.createServer((socket) => {
    socket.write(now() + "\n")
    socket.end()
 })

server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

