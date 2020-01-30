//Section 1: Programming Fundamentals

// DRY - Don't repeat yourself - avoid repetition

// KISS - Keep it simple, stupid! - Keep it simple and avoid complexity

// Avoid creating a YAGNI - You aren't going to need it - don't add
//functionality in a program until you need it

// Do the simplest thing that could possibly work - helps keep us on the path
// towards simplicity in the design

// Don't make me think = code should be easily read and understood with a
// minimum of effort required
// Write code for the maintainer - Write maintainable code with comments
//for the next coder

// Single responsibility principle - A class or function should perform a Single
//well defined task

// Avoid premature optimization - Don’t even think about optimization unless
// your code is working,

// Separation of concerns - separating a computer program into distinct sections
// such that each section addresses a separate concern.

//Which ones surprise you (if any)? None are suprising

//Which one is currently giving you the most struggle? I'm not sure

//////
//Commenting code
//////

//*****I have no idea what this function is doing********

//function f takes a variable name l
const f = l => {
  //initalize variables es = 0, p = 0, c = 1, n = 0
  let es = 0, p = 0, c = 1, n = 0
  // while c (1) is less than or equal to parameter l
  while (c <= l) {
    //n = c (1) + p (0)
    n = c + p;
    //array[1, 0] = [0, 1]
    [c, p] = [n, c]

    //returns true or false, either = to 1 or 0
    es += (c % 2 === 0) ? c : 0
  }
  return es
}

console.log(f(55))

//

const f2 = (limit) => {
  let evenSum = 0;
  let previous = 0;
  let current = 1;
  while (current <= limit) {
    let next = current + previous;
    previous = current;
    current = next;
    if (current % 2 === 0) {
      evenSum += current;
    }
  }
  return evenSum;
}


//console.log(f2(55))


// In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand? The second function names the variables symantically,
//making the code easier to read
//
// If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2? The second one
//
// Finally, the 'shorter' code style doesn't use semi-colons, except for the
//fourth line. Remove this semi-colon! Run the code, is this semi-colon
//necessary? Yes, the semi-colon is necessary for the program to run
