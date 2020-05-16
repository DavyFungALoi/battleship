const battleshipFactory = require('./battleshipFactory');



test('objectReturn', () => {

 
  expect(battleshipFactory('cruiser', 3, false)).toEqual({
      
    name: "cruiser",
    length: 3,
    isSunk: false,
    
  });
});


test('hitStatus', () => {
expect(battleshipFactory.hitStatus()).toBe("hello")

})

/*
test('objectLength', () => {
    expect(battleshipFactory(cruiser,3, 0, false)).toBe(3)
})

test('objectHitStatus', () => {
    expect(battleshipFactory(cruiser,3, 0, false)).toBe(3)
})

test('objectIsSunk', () => {
    expect(battleshipFactory(cruiser,3, 0, false)).toBe(3)
})

*/
