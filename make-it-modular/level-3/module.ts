let fs = require("node:fs/promises");
let finalList: Array<string> = []

async function makeItModular(file: any, filterExtension:any, callback:any) {
    try {
        let list = await fs.readdir(file)

        for(let i=0;i<list.length;i++){
            if (list[i].includes("."+filterExtension)){
                finalList.push(list[i]);
            }
        }
        callback(null, finalList)
        return finalList;
    } catch(err) {
        throw(err)
    }
}

module.exports = makeItModular
