// class names start with a capital letter
// keyword this

// const obj {
// obj.legs = 2;}
// console.log(obj);

class Character {
  constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
    this.name = name;
    this.age = age;
    this.eyes = eyes;
    this.legs = 2;
    this.arms = 2;
    this.eyes = 'hazel';
    this.hair = hair;
    this.lovesCats = lovesCats;
    this.lovesDogs = lovesDogs || false;
  }
  greet (otherCharacter) {
    console.log(`Hi ${otherCharacter}`);
  }

smite () {
  console.log('I smite thee you vile person')
  }
}
const me = new Character('Karolin', 41, 'green', 'copper dark ash blond', true, true);
const you = new Character('Arthur', 32, 'brown', 'dark brown', true, false);
console.log(me)
console.log(you)
me.legs = 32;
you.legs = 99;
console.log(me)
console.log(you)
me.greet('Nathanael');
you.greet('Brendan');

class Car {
  constructor(make, model, color, equipment){
    this.make = make;
    this.model = model;
    this.color = color;
    this.wheels = 4;
    this.steeringWheels = 1;
    this.radios = 1;
    this.equipment = equipment
  }
}
class Adventurer {
  constructor(name, height, attack){
    this.name = name;
    this.height = height;
    this.attack = attack
  }
}
const arthur = new Adventurer('Arthur', '6foot2', () => {console.log('smite')})
const nathanael = new Adventurer('Arthur', '6foot', () => {console.log('total destruction')})
arthur.attack()
nathanael.attack()

class Dog {
  constructor(name, color, rabiesVac){
this.name = name;
this.color = color
this.rabiesVac = rabiesVac;
  }
  bark(message) {
    console.log(message)
  }
}

const jo = new Dog ('Jo', 'black', true)
jo.bark(`Yes, ${jo.name} barks`)
console.log(jo);
