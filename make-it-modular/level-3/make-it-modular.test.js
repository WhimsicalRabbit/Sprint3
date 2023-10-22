const { promisedArray } = require("./app")

let path = "./test-files/";
let fileExtention = "js";

test('should return an array with the propper files', async () => {
    let resolvedPromised = await promisedArray 

    expect(resolvedPromised).toEqual(["1.js", "2.js"]);
});