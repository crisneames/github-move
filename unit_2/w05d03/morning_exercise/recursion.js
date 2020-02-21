// factorial
const factorial = (num) => {

  if (num != 0) {
   return num * factorial(num - 1)
 }
}
console.log(factorial(5))

// step counting
// n stairs; climb 1 or 2 steps at a timeout

const climbStairs = (n, count = 0) => {
    return climbStairs(n, count + 1) + climbStairs(n, count + 2)
}

// Fibonacci Sequence
