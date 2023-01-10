const names = require('./names');
const sayHi = require("./modules");

const data = require("./alternativeExports");
console.log("data", data); 
/* data {
  items: [ 'item1', 'item2', 'item3', 'item4' ],
  singlePerson: { name: 'Bob' }
}
*/

console.log(names); // obj => { john: 'John', peter: 'Peter' }

const {john, peter} = names; // destructuring
sayHi(names.john);
sayHi(peter);