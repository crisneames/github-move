// Given the following object pull out 3 key value pairs using destructuring (one being the function) and log them/call the function

const carObj = {
  make: "Subaru",
  model: "Crosstrek",
  year: 2020,
  type: "SUV",
  upgrades: ['mudflaps', 'roof rack', 'moonroof'],
  colors_available: {
    red: true,
    orange: false,
    blue: true,
    green: true
  },
  honk(){
    console.log('Beep Beep');
  }
}

const {make, model, honk} = carObj;
console.log(make);
console.log(model);
console.log(honk());

// Go through the MDN docs, find one method that is standard, one that is obsolete, one that is depreciated, and one that is experimental and write down he name and icon used for each type.

// standard method - Array.prototype.forEach() - no notation
// obsolete method - Array.unobserve() - trash can
// depricated method - Function.caller - thumbs down
// experimental method - Iterator() -flask

// Get the min of an array of numbers, if it is negative return 'the min is negative', if its positive return 'the min is positive'.
let arr1 = [2, 1, 10, 6, -2, 1]
let arr2 = [1, 7, 3, 0, 14, 11]

const maxMinNumber = ()=> {
console.log(Math.max(...arr1, ...arr2),  ' is positive')
console.log(Math.min(...arr1, ...arr2) ,' is negative')
}
maxMinNumber()

// Write a function that logs hello world if there is no argument provided. Otherwise it should log the argument provided (string) ex. greetin('Brendan') => hello Brendan.

const helloWorld = (name) => {
  if (this.name = name)
      console.log('Hello, ' + name)
  else
      console.log('Hello World!');
}
helloWorld('Cristi')

// Fix the for loop so that Timmy gets a golden key.

let belongings = [
  'boomerang', 'keyboard', 'tent', 'Pepto Bismol', 'pointy hat'
]
//for (key of belongings) {
  let key = 'a golden key'
  belongings.push(key)
  console.log('Timmy checks his satchel and finds', key)
//}
// console.log('Timmy now has they gold key', belongings[belongings.length -1] === 'a golden key')

// Create an empty object and using the new ES6 syntax insert the given variables into the object

const rAndR = 'tent'
const healing = 'pepto bismol'
const weapon= 'boomerang'
const music = 'keyboard'
const  style = 'pointy hat'

const ojbect =
{rAndr: 'tent', healing: 'pepto bismol', weapon: 'boomerang', music: 'keyboard', style: 'pointy hat'}


// Use the rest operator to take any number of arguments, get the strings, sort them alphabetically, and return them as one string.

let args = ['super', 99, 'cali', {toy: 'kite'}, 'fragil', 'istic', false, 'expiali', 'do', [8,6,7,5,3,0,9], 'cious']



// Use the two given arrays to solve the following problems using the short arrow function syntax.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// Use the Filter method to filter the nums array for numbers less than 4.

var numbers = nums.filter(e => e < 4)
console.log(numbers)

// Use the Filter method to filter words that have an even length.

var evenLength = panagram.filter(e => e.length % 2 === 0)
console.log(evenLength);

// Use the For Each method to log each value in the nums array by 3.

this.nums.forEach(f => f % 3 === 0)
console.log(f);



// Use the For Each method to log each word with an exclamation point at end of the word.


//=============== HUNGRY FOR MORE ===============//

// Given an array test to see if all values in the array are uniqe or not.

// Solve https://projecteuler.net/problem=2 using es6 syntax (copy and paste the link into your browser).
