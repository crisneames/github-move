//console.log('It works!');

const cards = [
  'https://www.trustedtarot.com/img/cards/the-fool.png',
  'https://www.trustedtarot.com/img/cards/the-magician.png',
  'https://www.trustedtarot.com/img/cards/the-high-priestess.png',
  'https://www.trustedtarot.com/img/cards/the-empress.png',
  'https://www.trustedtarot.com/img/cards/the-emperor.png',
  'https://www.trustedtarot.com/img/cards/the-heirophant.png',
  'https://www.trustedtarot.com/img/cards/the-chariot.png',
  'https://www.trustedtarot.com/img/cards/strength.png',
  'https://www.trustedtarot.com/img/cards/the-hermit.png',
  'https://www.trustedtarot.com/img/cards/wheel-of-fortune.png',
  'https://www.trustedtarot.com/img/cards/justice.png',
  'https://www.trustedtarot.com/img/cards/the-hanged-man.png',
  'https://www.trustedtarot.com/img/cards/death.png',
  'https://www.trustedtarot.com/img/cards/temperance.png',
  'https://www.trustedtarot.com/img/cards/the-tower.png',
  'https://www.trustedtarot.com/img/cards/the-moon.png'
]
//console.log(cards[0]);

const randomCard = () => {
  return cards[Math.floor(Math.random() * cards.length)];
}



const $cardImage = () => {
  return ('url(' + cards[randomCard()] + ')');
}

//$('<img>').attr('src', randomCard()).appendTo('div')
cardAdded = () => {
  const $divAdd = $('<div>').addClass('card').css({"background-image": $cardImage()})
}


$(()=>{
  $("div").on("click", () => {
    const $div = $('<div>').text('Add random image');
    $div.addClass('square');
    $div.appendTo('body');

})
})
