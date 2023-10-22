const {message} = require("./app.js")

test("It should be able to print in the console", () => {
    
    const mock = jest.spyOn(global.console, "log")

    mock(message)

    expect(mock).toHaveBeenCalledWith("HELLO WORLD");
})