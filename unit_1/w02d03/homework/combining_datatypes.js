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
const powerButton = () => {
  return options () ==> {
    conole.log('select a song'}

};
powerButton();
