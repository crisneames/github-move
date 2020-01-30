class Pet {
constructor(owner, name){
  this.owner = owner;
  this.name = name;
  }
  walk () {
    console.log('walka walka');
  }

}

const fido = new Pet('Cristi', 'Jemma');
console.log(fido.name);

class Dog extends Pet {
  constructor(owner, name) {
    super(owner, name)
    this.price = 20
  }
  bark () {
    console.log('bark');
  }
  chaseTail () {
    console.log('oh boy oh boy oh boy')
  }
  getPrice () {
    return this.price
  }
}

const elmo = new Dog('Paula', 'Lily')
console.log(elmo);
console.log(elmo.bark);
console.log(elmo.chaseTail);
