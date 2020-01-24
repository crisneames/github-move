////////////////////////
/////Part I: HTML & CSS
//////////////////////

//Rank your comfort with HTML & CSS
//4 - I feel pretty good about the material, but some extr review would help
//

//////////////////
/////Part II: JavaScript Reps
////////////////

//Easy Going

// for (let i = 1; i <= 20; i++) {
//   console.log(i)
// };

//Get Even

// for (let i = 0; i <= 200; i+= 2) {
//   console.log(i)
// };

//Fizz Buzz

// let aNum = 15;
// for (let i = 0 ; i <= 100; i++) {
// if (aNum % 3 || aNum % 5) {
//   console.log('FizzBuzz')
// } else if (aNum % 3 === 0) {
//     console.log("Fizz")
//   } else if  (aNum % 5 === 0) {
//     console.log('Buzz')
//   } else if (aNum % 3 || aNum % 5) {
//     console.log('FizzBuzz')
//     }
//   };

//Wild Wild Life
//
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// //1.
// plantee[2] = 5001;
// //2.
// wolfy[3] = 'Yukon Territory';
// //3.
// //*****Not sure about this one******
// //4.
// wolfy[0] = 'Gameboy';
//
// console.log(wolfy);
// console.log(plantee);

//Yell at the Ninja Turtles
//
let turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
let x;

// for (x of turtles) {
//   console.log(x)
// };

//Methods Revisited
//
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
//console.log(favMovies[8]);

//1. sort in alphabetical order
//console.log(favMovies.sort());

//2. Remove the last element of an array
//console.log(favMovies.pop());

//3. Pushes an element to the end of an array and returns the new length
//console.log(favMovies.push("Guardians of the Galaxy"));

//4. Reverse the order of the elements in an array
//console.log(favMovies.reverse());

//5. Removes the first element of an array and returns the removed item
//console.log(favMovies.shift());

//6. Adds new elements to the beginning of an array and returns the new array length
//console.log(favMovies.unshift("Cassablanca", "Gone with the Wind"));
//console.log(favMovies);

//7. Removes or replaces existing elemenfs and/or adding new elements in place
//****How do you detemine the middle of the array progamtically instead of counting it and hard coding??
//console.log(favMovies.splice(3, 1, 'Avatar' )); //?? Don't understand this one
//console.log(favMovies);

//8, Extract parts of a string and returns the extracted parts in a new string. Slice does not permanently //////alter the array
//****Don't really understand slice.
//console.log(favMovies.slice(3, 5));
//console.log(favMovies);

//9.
//varA = favMovies.slice(3, 5);
//console.log(varA);

//10. ***I don't understand what I'm supposed to see here
//console.log(favMovies);

console.log(favMovies[18]);
