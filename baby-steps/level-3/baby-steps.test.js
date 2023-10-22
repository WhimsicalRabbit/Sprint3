process.argv[2] = 8;
process.argv[3] = 8;
process.argv[4] = 8;

const {result} = require("./app");

test('should add the numbers correctly', () => {
    expect(result).toBe(24);
});