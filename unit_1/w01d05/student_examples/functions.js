// console.log('Hi!');

//function declaration
// function printJohn() {
//   return 'John'
// };
//
// //function expression
// const printJohn2 = () => {
//   return "John"
// };
//
// //simplified
// const printJohn3 = () => "John";
//
// //DRY - dont repeat ¥ourself
// //write function once and use function over and over again
// //define function as a const
//
// const printBoo = () => {
//   console.log('======')
//   console.log('Boo!')
//   console.log('======')
// };
// //invoking/calling a function
//
// printBoo();

// printSum = () => {
//   console.log(10 + 10)
// };

// const printTriangle = () => {
//   console.log('#')
//   console.log('##')
//   console.log('###')
//   console.log('####')
//   console.log('#####')
// };
//return stops the function
//prints out an undefined because there's nothing being returned
// console.log(printTriangle());

// printSum();
// printTriangle();

// const printTriangleV2 = () => {
//     for (let i= 1; i <=5; i++) {
//       console.log('#'.repeat(i))
//     }
//     return "Version 2 with loop";
// }
//
// console.log(printTriangleV2());

const printTriangleV3 = (num) => {
  for (let i= 1; i <= num; i++) {
    console.log('#'.repeat(i))
  }
  return "Version 3 with loop";
  }


// console.log(printTriangleV3(10));

// const checkInputLength = (input) => {
// 	if (input.length > 10) {
// 		console.log('input length is greater than 10');
// 	} else {
// 		console.log('input length is not greater than 10');
// 	}
// };

// function that mutates => changes the input value, updates it
	let ricMershonAge = 21
	let scottDraperAge = 25
  //
	// const increaseAge = (personsAge) => {
	//   personsAge = personsAge + 1
	//   console.log (`Horray it's your ${personsAge} birthday`)
	// }

//  Argument vs Parameter
//The argument is the input, the parameter is how the input is represented in the function.

//const func = (PARAMETER) => {
	// some code
//}

//func(ARGUMENT);

//////
//scope
/////

// const checkSquare = (num) => {
// const squareRoot = Math.sqrt(num);
//   if (squareRoot % 1 === 0) {
//     return true;
//   } else {
//     return false;
//   }
//
// }

// checkSquare(16);
// checkSquare(15);

// const checkToLimit = (num) => {
//   for (let i = 1; i <= num; i++) {
//     if (checkSquare(i)) {
//       console.log(`${i} is a perfect square`);
//     } else {
//       console.log(`${i} is not`);
//     }
//   }
// }
// checkToLimit(100);
//
// //template literal -
// const name = 'Cristi';
// const mystring = `hi ${name}`
//
// const name = ['star', 1, 2, 9]
// const myString = `hi ${name[3]}`

//return function without invoking it
// const closure = () => {
// 	let privateVal = 5
//   //we would normally not do this because we want to keep the value private.
// 	const innerFunc = () => {
// 		privateVal++
// 		// we would normally not do this because we want to keep the value private
// 		console.log(privateVal)
// 		return privateVal > 10
// 	}
// 	return innerFunc
//   }
//   const generatedFunc = closure()
//   generatedFunc()
//   generatedFunc()

//recursion
// const areAllOdd = (arr) => {
//   // This known as our base case this keeps us from having an infinite loop
//   // we are checking here to see if the array no longer has any values in it
//     if (arr.length === 0){
//       console.log('no numbers in this array')
//       return
//     }
//     // here we check if the num is odd
//     if (arr[0] % 2 === 0){
//       console.log(`is the first number in this array odd ${arr}`)
//       // We run shift because we want to eliminate the value that we know is no longer checking for
//       const num = arr.shift()
//       console.log(`${num} is not odd`)
//       areAllOdd(arr)
//     } else {
//           console.log(`is the first number in this array odd ${arr}`)
//       console.log(`${arr[0]} is odd`)
//       return
//     }
//   }
//
//   const martinsArray = [3142, 5798, 6550, 5914]
//
//   areAllOdd(martinsArray)
//


  
