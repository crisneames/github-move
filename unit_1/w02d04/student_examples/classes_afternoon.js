class Character {
  constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
    this.legs = 2;
    this.arms = 2;
    this.name = name;
    this.age = age;
    this.eyes = eyes;
    this.hair = hair;
    this.lovesCats = lovesCats;
    this.lovesDogs = lovesDogs || true;
  }
  greet (otherCharacter) {
    console.log('hi ' + otherCharacter + '!');
  }
  classyGreeting (otherClassyCharacter) {
    console.log('Howdy ' + otherClassyCharacter.name + '!');
  }
  setHair (hairColor) {
    this.hair = hairColor;
  }
  smite () {
    console.log('i smited thee.');
  }

}
//  const hobbit = new Character('Mr Baggins', 33, 'brown', 'black')
// console.log(hobbit);

//define class name and extend class you want to inherit from
class Hobbit extends Character {
  constructor (name, age, eyes, hair) {
    super(name, age, eyes, hair)
    this.skills = ['thievery', 'speed', 'willpower' ]
  }
  steal () {
    console.log('lets get away!');
  }
  greet (otherCharacter) {
    console.log('Greetings + otherCharacter')
  }
}

const frodo = new Hobbit ('Frodo', 30, 'brown', 'black')
console.log(frodo)
frodo.smite()
frodo.steal()


class Elf extends Character {
  constructor (name, age, eyes, hair) {
    super(name, age, eyes, hair)
  this.sounds = ['cry', 'laugh', 'squeal' ]
}
  run () {
    console.log('I got away!')
  }
}

const sam = new Elf('Sam', 102, 'blue', 'orange');
console.log(sam);

sam.run();
console.log(sam.sounds[2])

//////
//Factory
//////
//Factory objects creates other objects

class Car {
  constructor (maker, serialNumber) {
    this.serialNumber = serialNumber;
    this.maker = maker
  }
  drive () {
    console.log('Vroom Vroom');
  }
}

class Factory {
  //constructor that will set all of our object attributes
  //accepts param company
  //this initializes an empty array because we need some place to store the cars we're going
  //to create
  constructor (company) {
    this.company = company;
    //store our cars in this array called this.cars
    this.cars = [];
  }
//this generateCar method is creating a new car
  generateCar () {
    const newCar = new Car(this.company, this.cars.length);
    //pushes car into array
    this.cars.push(newCar);
  }
  findCar (index) {
    return this.cars[index];
  }
  //delete last car with pop
  deleteCar (index) {
    return this.cars.pop();
  }
}

const tesla = new Factory('Tesla');
tesla.generateCar[]
console.log(tesla)
tesla.generateCar[]
console.log(tesla)
tesla.generateCar[]
console.log(tesla)

const bernierMotors = new Factory('Bernier Motors')
bernierMotors.generateCar();
console.log(bernierMotors);


console.log(bernierMotors.findCar(0));
testla.deleteCa())
console.log(tesla);
