process.argv[2] = "./test-files"
process.argv[3] = "js"

const {promisedArray} = require("./app")

test('should return the names of the two files for the test folder', async () => {
    
    let solvedArray =  await promisedArray
    
    expect(solvedArray[0]).toBe("1.js");
    expect(solvedArray[1]).toBe("2.js");
});