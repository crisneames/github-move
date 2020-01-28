console.log('objects woo');

const car = {
  color: "blue",
  hp: "4000",
  year: 1989
}
// console.log(car);
// console.log(car.color);

//array
const arr = [];
//object
//const obj = {};

const house = {
  doors: 9
};
// console.log(house);

//add new key value pair to our house object
house.windows = 30

// console.log(house);

//change properties

house.windows = 40
// console.log(house);

const mogwai = {};
//can aadd properties
mogwai.name = 'Gizmo'

// console.log(mogwai);
//cannot overwrite the entire object
//mogwai = {name: 'Gizmo'}

//Unique keys
//
const borough = {
  name: "Brooklyn",
  name: "The Bronx"
};

// console.log(borough);

// cons obj = {
//   watevs: 'hi',
//   count: 4
// }
//
// if (obj.whatevs === 'hi') {
//   console.log('ok')
// }
//
// for (let i = 0; i < obj.count; i++) {
//   console.log(i);
// }


//You can test to see if a property exists on an object:

const obj = {
	something:'wuttt'
}

if (obj.something) {
	console.log('ok');
}
if (obj.anotherthing){
	console.log('ok');
} else {
	console.log('no go');
}

if (obj2.anotherthing) {
  console.log('does have this property')
} else {
  console.log('this object does NOT have the key anotherthing. Let us add it below')
  obj2.anotherthing = 'NOW IT HAS IT'
  console.log('this is obj2 property: for the key anotherthing', obj2.anotherthing)
}
