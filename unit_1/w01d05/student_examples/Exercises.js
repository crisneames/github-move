
// const printScreen = (name) => {
//   console.log(printScreen(`my name is ${name}`));
// };
//
// printScreen('Slimer');
//
// //reverseWordOrder =('string') => {
//   //Use tje
// //}

//////
//reverseWordOrder
////

 const reverseString = (str) => {
  //Step 1. Use the split() method to feturn a new array
  let splitString = str.split("")
  //['h', 'e', 'l', 'l', 'o']

  //Step 2. Use the reverse() method to reverse the new created array
  let reverseArray = splitString.reverse();
  //['o', 'l', 'l', 'e', 'h']

  //Step 3. Use the join() method to join all elements of the array into a string
  let joinArray = reverseArray.join(" ")

  //Step 4, Return the reversed string
  return joinArray;
}

reverseString('hello');

/////
//calculate
////

const calculate = (num1, num2, operation) => {
if operation = 'add'{
} else if {
  operation = 'sub'
} else if {

operation = 'mult'
} else if {
operation = 'div' 

operation = 'exp'
}
