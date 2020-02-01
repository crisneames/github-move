// console.log('It works!');

// spaceship specs

class SpaceShip {
constructor (hull, firepower, accuracy) {
  this.hull = hull;
  this.firepower = firepower;
  this.accuracy = accuracy;
}
// attack the enemy
attack (enemy) {

  if (this.accuracy < .8) {
	   enemy.hull -= this.firepower
     alert('Hit!');
} else alert('Miss!')
alert(`Enemy hit points total ${enemy.hull}`);
alert(`Enemy firepower total is ${enemy.firepower}`)
}

}

// create random whole number between 3 and 6 for alien hull
getRandomInt= (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }

// create random decimal number for alien firepower and accuracy
getRandomDecimal = (min, max) => {
  return (Math.random() * .8);
}


// create alien


// schwartz attacks the alien
//start of game
const alien = new SpaceShip (getRandomInt(3, 6), getRandomInt(2, 4), getRandomDecimal(.6, .8))
let player = alert('Let the Battle Begin!')
const schwartz = new SpaceShip (20, 5, .7)
schwartz.attack(alien);

alert('Next player')
alien.attack(schwartz);
// alien attacks schwartz
//alien.attack(schwartz);
//console.log(getRandomDecimal(.6, .8))
