console.log('It works!');

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
    sugarShock: 10
  }
}
  catchPhrases = ['I\'m fresher than day old pizza', 'You can\'t count my calories']
  talkSass () {
    return this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)];
  }
  announceHealth () {
    console.log(this.health)
  }
  fight () {
    console.log('I\'m ready to rumble');
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
    }
    catchPhrases = ['I\'m Youtube famnous', 'I\'m more dangerous that an uncovered sewer']
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
