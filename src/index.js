const battleshipFactory = require('./battleshipFactory/battleshipFactory');

console.log("Hello World from your main file!");
const cruiser = battleshipFactory('cruiser', 3, false)
console.log(cruiser.hitStatus)


