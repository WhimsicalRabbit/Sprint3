const { promisedFn } = require("./app")

test('should return the number of lines in a text', async () => {
    let resolvedFn = await promisedFn

    expect(resolvedFn).toBe(30);
});