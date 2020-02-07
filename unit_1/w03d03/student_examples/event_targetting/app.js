//console.log('Oh hey, I remember something like this')
let handOfCards = []
// select an element
// document on ready or document on load
$(() => {
  //select all elements that have the class card
const $card = $('.card')
//add am event listener, add the event handler
$card.on('click', (event) => {
  // get the elementwe clicked on and toggle the class of card-back
  //if card-back class is present, remove it
  //
  $(event.currentTarget).toggleClass('card-back')
  playHand();
})
}) // This closes document on ready

const playHand = () => {
     handOfCards.push($(event.currentTarget).children().eq(1).text())
     if (handOfCards.length === 2) {
       checkHand();
     }
  }
const checkHand = () => {
  console.log('Ok, I will check your cards', handOfCards);
  handOfCards = []
}
