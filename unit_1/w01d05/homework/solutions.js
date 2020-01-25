
//////
//Verbal Questions
//////

//1. A parameter is the variable(s) in the declaration of a function, while an argument is the value //of the variable that gets passed to the function. The arguments are passed into the method's parameter.

//2. Console.log is a function that logs the arguments you pass to the console. Return is a statement that allows a function to output a value back to where it was called.

//////
//Palindrome
//////

const checkPalindrome = (str) => {
//Lowercase the string and replace all non-words characters
  let lowerCaseStr = str.toLowerCase().replace(/[^\w]/gi, "") // replace all non-words characters
  let reverseStr = lowerCaseStr.split('').reverse('').join('');
    if reverseStr === lowerCaseStr {
   return = true
 } else {
   return false
 };


checkPalindrome('racecar');
console.log(reverseStr);
console.log(lowerCaseStr);
