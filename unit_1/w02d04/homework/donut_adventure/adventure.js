//console.log('It works!');

//
// Daring Adventure!
//

// Our Hero

class Hero {
constructor(name, health = 100){
  this.name = name;
  this.health = health;
  this.weapons = {
    sprinkleSpray: 5,
    sugarShock: 10,}
    this.catchPhrases = ['I\'m fresher than day old pizza', 'You can\'t count my calories']

  }



randonInt(array) {
  return Math.floor(Math.random() * array.length)
}
  talkSass () {
    return this.catchPhrases[Math.floor(Math.random() * array.length)];
  }
  announceHealth () {
    console.log(this.health)
  }
  fight () {
    console.log('I\'m ready to rumble');
    // create an array of the weapon names (keys for this.weapon)
    const weaponOptions = Object.keys(this.weapon);

    //select a random weapon from that array
const selectWeapon = weaponOptions[this.randomInt(weaponOptions)];
    //log the selecfed weapon and it's hit points
    console.log(this.weapon[selectWeapon] + ' hitpoints')
  }
}

const dougie = new Hero('Dougie the Donut', 100);
console.log(dougie)
console.log(dougie.catchPhrases)

class Enemy {
  constructor(name, health = 100){
    this.name = name;
    this.health = health;
    this.weapons = {
      pepperoniStars: 5,
      cheeseGrease: 10
    }

    this.catchPhrases = ['I\'m Youtube famnous', 'I\'m more dangerous that an uncovered sewer']
  }
    talkSmack () {
      return this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)];
    }
    announceHealth () {
      console.log(this.health);
    }
    fight (enemy) {
      console.log(this.health)
      return this.weapon.cheeseGrease
    }
}

const pizzaRat = new Enemy('Pizza Rat')
console.log(pizzaRat)

// Walking down the street

console.log(dougie.talkSass())
console.log(pizzaRat.talkSmack())
console.log(dougie.announceHealth());
console.log(pizzaRat.announceHealth());
console.log(dougie.fight(pizzaRat));



// Fight
// I can't figure all of this one out. Would love to see it in class
