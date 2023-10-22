const http = require('http')
const port = "http://127.0.0.1:8080/"

function httpGet (port: string): Promise<string> {
    return new Promise((resolve, reject) => {
        http.get (port, (res: any) => {

            res.setEncoding("utf8");
            let rawData = '';

            res.on("data", (chunk: string) => {
                rawData += chunk
                console.log(rawData)
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

httpGet(port)

module.exports = {httpGet}