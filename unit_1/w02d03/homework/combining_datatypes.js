//////
//Section 2 Combining Datatypes
//////

// 1.
const crayonBox = {
crayons: ['red', 'green', 'yellow', 'blue', 'orange']
}

console.log(crayonBox.crayons[3]);

// 2.
const bottle = {
  cap: {
    material: 'plastic',
    color: 'red'
}
}

// 3.
console.log(bottle.cap.material);


// 3.
const receipt = [
    {name: 'hamburger',
    price: 5
          }
]
console.log(receipt[0].name);

// 4.
const apartmentBuilding = [
      tennents = ['Martha', 'Mandy', 'Michael', 'Mindy']
]
//console.log(apartmentBuilding[0].tennents)[0];
//////////////////can't get this one


//Combine objects, arrays, and functions more than one level deep

// 1.
const knit = () => {
  return  {item: 'scarf', size: '6 ft'}
}
console.log(knit().item);

// 2.
const crayonSelector = () => {
return {box: 'crayons',
        crayons: ['red', 'green', 'yellow', 'blue', 'orange']
        }
}
console.log(crayonSelector().crayons[2]);

// 3.
// const powerButton = () => {
//   return options () ==> {
//     conole.log('select a song'}

//};
//powerButton();
////////////////can't figure this one out

//////
//Model a Vending Machine
//////

// const vendingMachine = {
//       snacks: [ {
//                 name: 'candy',
//                 price: 2
//               },
//               {name: 'cookies',
//               price: 3
//             },
//               {name: 'chips',
//                price: 2
//              }
//             ]
//       vend = () => {
//         console.log(vendingMachine.snacks[2])
//       }
//   }
//
// console.log(vendingMachine.vend)
////////////can't figure this one out

//////
//Callbacks
//////

const add = (num1, num2) => {
  return (num1 + num2)
}


const subtract = (n1, n2) => {
  return (n1 - n2)
}


const multiply = (number1, number2) => {
  return (number1 * number2)
}


const divide = (a, b) => {
  return (a / b)
}


const calculate = (numb1, numb2, operates) => {
 let value = operates(numb1, numb2)
 return value
}

console.log(subtract(4, 1));
console.log(calculate(4, 1, subtract))
console.log(calculate(10, 10, multiply))
console.log(calculate(500, 5, divide))
console.log(calculate(39, 45, add))

//fuction definition placement


// const bar = () => {
//     console.log('bar here');
// }
//
//
// const foo = () => {
//     console.log('foo here');
// }
// bar();
// foo();

//Error reading



const foo = ()=>{
    console.log('hi');
}
foo();
//The equal sign is missing between foo and () on the first line
//foo()must be called after the function instead of before
