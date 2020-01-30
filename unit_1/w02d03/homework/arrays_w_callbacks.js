//////
//Section 3 Array Methods with Callbacks
//

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

//Every

const numberCheck = (nums) => {
return nums >= 0;
}
const everyNum = () => {
  nums.every(numberCheck);
}
//
// console.log(numberCheck());
//
//
const wordCheck = (panagram) => {
return panagram < 8;
 }
//
 const everyWord = () => {
   word.every(wordCheck);
 }
// console.log(wordCheck())
//
const numberCheck2 = (num) => num >= 0;
console.log(num.every(numberCheck2))

//Filter
const checkNumber = () => nums < 4
// console.log(num.filter(checkNumber))

//Find
const checkNumber1 = () => nums % 5 === 0
// console.log(num.find(checkNumber1))

//Find Index
const checkNumber3 = () => nums % 5 === 0
console.log(num.findIndex(checkNumber3))

//For each
panagram.forEach((item, i) => {
  
});


//Map
const map1 = num.map(x => x * 100);
console.log(map1)
