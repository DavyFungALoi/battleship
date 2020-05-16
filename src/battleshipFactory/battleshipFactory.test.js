const battleshipFactory = require('./battleshipFactory')

test('factorytest', () => {
    expect(battleshipFactory(1,2)).toBe(3)
})