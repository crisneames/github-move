console.log('arrays')

const iceCreams = ['Vanilla','Chocolate','Strawberry','Rocky Road'];

const updatedIceCreams = iceCreams.map((flavor) => {
  return flavor + ' ice cream'
})

//console.log(updatedIceCreams)


const orinalArray = [2,4,6,8,10];

const newNumArray = orinalArray.map((num) => {
    return num * 2
})

//console.log(newNumArray);

// arr[2, 4, 6, 8, 10, 12]
// let result = arr.reduce(callback);
// // Optionally, you can specify an initial value
// let result = arr.reduce(callback, initValue);


const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
