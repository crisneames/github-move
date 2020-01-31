//////
//Create Classes
//////

// Pet

class Hamster {
constructor(owner = '', name, price = 15){
  this.owner = owner;
  this.name = name;
  this.price = price;
  }
  wheelRun () {
    console.log('squeak squeak');
  }
  eatFood () {
    console.log('nibble nibble');
  }
  getPrice () {
    return this.price;
  }
}
// rosco = new Pet('Paul', 'Rosco')
// console.log(rosco);



// Person

class Person {
constructor(name, age = 0, height = 0, weight = 0, mood = 0, bankAccount = 0) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.weight = weight;
  this.mood = mood;
  this.hamsters = [];
  this.bankAccount = bankAccount;
}
getName () {
  return this.name;
}
getAge () {
  return this.age;
}
getWeight () {
  return this.weight;
}
greet () {
  console.log(this.name);
}
eat () {
  this.weight ++;
  this.mood ++;
}
exercise () {
  this.weight --

}
ageUp () {
   this.age ++;
   this.height ++;
   this.weight ++;
   this.mood --;
   this.bankAccount += 10;
   return 'Hello'
}

buyHamster (pet) {
  this.hamsters.push(pet);
  this.mood += 10;
//bankAccount
}
}

sandy = new Person('Sandy', 48, 5.5, 120, 5, 100)
rosco = new Hamster('Paul', 'Rosco')
console.log(rosco)
console.log(sandy)
console.log(sandy.ageUp())
console.log(sandy)
sandy.buyHamster(rosco)
console.log(sandy)
