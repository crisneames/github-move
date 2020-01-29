Ωonst adventurer = {
  name: 'Cristi',
  type: 'bard',
  hitpoints: 200,
  attack: () => {return 'I attacked you, you fiend'},
  belongings: ['sword', 'potion', 'tums'],
  companion: {
    name: 'Scott',
    type: 'White Mage',
    hitpoints: 100,
    companion: {
      name: 'John',
      type: 'Paladin',
      hitpoints: 2000,
      belongings: ['sword', 'shield', 'potion', 'unbreakable will']
    }
  }
  }

// console.log(adventurer.belongings[0])

// for (let i = 0; i < adventurer.belongings.length; i++) {
//   console.log(adventurer.belongings[i])
// };

// console.log(adventurer.companion.hitpoints);
// console.log(adventurer.companion.companion.belongings[3])

// console.log(adventurer.attack())

//////The afternoon/////////

//2 dementional arrays

const foo = [
    ["0,0", "0,1", "0,2"],
    ["1,0", "1,1", "1,2"],
    ["2,0", "2,1", "2,2"]
];

//for of loop for arrays // for in loops for objects

//first time through row = the first array (["0,0", "0,1", "0,2"],)
//Second time through row = the second arrays (["1,0", "1,1", "1,2"])
//third time throujgnh row = the third array(["2,0", "2,1", "2,2"])
//2nd loop happens three times.
//the first time element = 0.0, next 0,1 and finally 0,2
//it goes through again and gets the 2nd row of elements
//third time through it gest the 2rd roe of elements
// for (let row of foo) {
//   for (let element of row){
//     console.log(element);
//   }
// }

//same as above
// for (let i =+ 0; i < foo.length; i++) {
//     for (let j = 0; j < foo[i].length; j++) {
//         console.log(foo[i][j]);
//     }
// }

// console.log(foo[0][0]);

//returning an object
const summonBird = () => {
  return {
    color: 'blue'
  }
}
console.log(summonBird().color)
console.log(summonBird());

//return an arrays
const summonServant = () => {
  return {
    bagofStuff: ['clothes', 'food', 'keys']
  }
  };

  // console.log(summonServant().bagOfStuff[1]);
  const myObj = summonServant('')

  //A function can return anything, even another function

  const someFunc = () => {
    return "william is super duper awesome!"

  }

  const someValue = someFunc().split('').reverse().join('')

  //someFunc returns the string william is super duper awesome.
  //split turns this string ino an array of words
//reverse method
//join it together

console.log(someValue);
