const fs = require("node:fs/promises");
const filePath = "./test-files/text.txt";

async function read() {
    try {
        let file = await fs.readFile(filePath, "utf8")
        let formattedFile = file.split("\n").length -1
        console.log(formattedFile)
        return formattedFile
    } catch (err) {
        throw err
    }
}

let promisedFn = read()

module.exports = {promisedFn}

