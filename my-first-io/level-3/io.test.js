const {str} = require("./app")

test('should count the lines of a txt file', () => {
    expect(str).toBe(3);
});