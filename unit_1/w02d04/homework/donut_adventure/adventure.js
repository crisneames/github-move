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
    console.log(catchPhrases[Math.floor(Math.random() * catchPhrases.length)]);
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
      console.log(catchPhrases[Math.floor(Math.random() * catchPhrases.length)]);
    }
    announceHealth () {
      console.log(this.health);
    }
    fight () {
      console.log('I\'m gonna flatten you like a slice of pepperoni!');
    }
}

const pizzaRat = new Enemy('Pizza Rat')
console.log(pizzaRat)
