
//////
//Verbal Questions
//////

//1. A parameter is the variable(s) in the declaration of a function, while an argument is the value //of the variable that gets passed to the function. The arguments are passed into the method's parameter.

//2. Console.log is a function that logs the arguments you pass to the console. Return is a statement that allows a function to output a value back to where it was called.

//////
//Palindrome
//////
//Doesn't work******************//
// const checkPalindrome = (str) => {
// //Lowercase the string and replace all non-words characters
//   let lowerCaseStr = str.toLowerCase().replace(/[^\w]/gi, ""); // replace all non-words characters
//   let reverseStr = lowerCaseStr.split('').reverse('').join('');
//     if reverseStr === lowerCaseStr.split('').reverse('').join('') {
//    return = true
//  } else {
//    return false
//  };
//
// checkPalindrome('racecar');
// console.log(reverseStr);
// console.log(lowerCaseStr);
// console.log(checkPalindrome('radar'));

//////
//Sum Array
//
//*******Don't work*************
const arr = [10, 20, 20, 40];
let sum = 0;
const sumArray = (a, b) => {
  for(let i = 0;i < arr.length; i++) {
    sum += arr[i];
  }
 return sum;
};

console.log(sum);

//////
//Prime Numbers
//////

//******2nd function does not work***********
// const checkPrime = (num) => {
//   if (num===1){
//     return false;
//   } else if (num === 2)
//   { return true;
//   } else {
//     for(let i = 2; i < num; i++) {
//        if(num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
// };
//
// console.log(checkPrime(37));
//
// const printPrimes = () => {
//   checkPrime(num)
//   if true
//   console.log(num);
//
// };

//////
//Rock Paper Scissors
//////

const randomMove = () => {
  let random = Math.random()
  if (random < .3) {
    console.log('rock')
  }
  if (random < .3 && random < .6) {
    console.log('paper')
  }
  if (random > .6) {
    console.log('scissors')
  }

}
console.log(randomMove());
const rockPaperScissors = (compMove, userMove) => {
        if (compMove === userMove) {
          return "It's a tie"
        }
        if (compMove === 'rock') {
           if (userMove === 'scissors') {
             //rock wins
             return "You win"
           } else {
             //paper wins
             return 'You lose'
           }
        }
        if (compMove === 'paper') {
          if (userMove === "rock") {
            //paper wins
            return 'You win'
          } else {
            //scissors win
            return 'You lose'
          }
        }
        if (compMove === 'scissors') {
          if (userMove === 'rock') {
            //rock wins
            return 'You lose'
          } else {
            //scissors win
            return 'You win'
          }
        }
}

console.log(rockPaperScissors('rock', 'paper'));
