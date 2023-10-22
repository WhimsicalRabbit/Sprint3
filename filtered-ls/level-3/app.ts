let fs = require("node:fs/promises");
let finalList: Array<string> = []

async function read() {
    try {
        let list = await fs.readdir(process.argv[2])

        for(let i=0;i<list.length;i++){
            if (list[i].includes("."+process.argv[3])){
                finalList.push(list[i]);
            }
        }
        console.log(finalList.join("\n"))
            return finalList
    } catch(err) {
        console.log(err)
    }
}

let promisedArray = read()

module.exports = {promisedArray}