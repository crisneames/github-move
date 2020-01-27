
//////
//Verbal Questions
//////

//1. A parameter is the variable(s) in the declaration of a function, while an argument is the value //of the variable that gets passed to the function. The arguments are passed into the method's parameter.

//2. Console.log is a function that logs the arguments you pass to the console. Return is a statement that allows a function to output a value back to where it was called.

//////
//Palindrome
//////

//.split('') -- split a string into an array of substrings
//.reverse() -- reverse the order of elements in an array
//.join() -- convert the order of an array into strings
)
const checkPalindrome = (str) => {
//Lowercase the string and replace all non-words characters
  let lowerCaseStr = str.toLowerCase();
  console.log(lowerCaseStr);
  let reverseStr = lowerCaseStr.split('').reverse('').join('');
  console.log(reverseStr);
    if (reverseStr === lowerCaseStr) {
   return true
 } else {
   return false
 }
};

console.log(checkPalindrome('Cristi'));

//////
//Sum Array
//

const arr = [10, 20, 20, 40];
let sum = 0;
const sumArray = () => {
  for(let i = 0;i < arr.length; i++) {
    sum += arr[i];
  }
 return sum;
};

sumArray();
console.log(sum);

//////
//Prime Numbers
//////


const checkPrime = (num) => {
  if (num===1){
    return false;
  } else if (num === 2)
  { return true;
  } else {
    for(let i = 2; i < num; i++) {
       if(num % i === 0) {
        return false;
      }
    }
    return true;
  }
};

console.log(checkPrime(25));


//////
//Rock Paper Scissors
//////
//*****I didn't know how to do this one. I referenced https://gist.github.com/joshfry/7327656 for the rockPaperScissors function.************* I now understand more about nested ifs*********
const randomMove = () => {
  let random = Math.random()
  if (random < .10) {
    console.log('rock')
  }
  if (random < .10 && random < .30) {
    console.log('paper')
  }
  if (random > .30) {
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
