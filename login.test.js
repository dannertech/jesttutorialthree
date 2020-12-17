const login = require('./login.js');

test('testing the name and email which should return true', () => {
    expect(login("Diamonique","danner@danner.tech")).toBe(true);
});