///////////
//Excited Kitty
//////////
//1. Write code that logs Love me, pet me! HSSSSSS!' 20 atimes

const catTalk = ['...human...why you takaing pics of me',
                'the cat didn\'t do it',
                'other things....'];



for(let i = 0; i < 20; i++) {
  let randomIndex = Math.floor(Math.random() * catTalk.length);
  //if i divided by 2 has no remainder - it's an even #
  if (i % 2 === 0) {
    console.log(catTalk[randomIndex]);
    //if i divide by 2 has a remainder it's an odd number
  } else {
  console.log( i + ' Love me, pet me! HSSSSSS!')
}
}

//Yell at the ninja turtles

//create an array with the members of the ninja turtles

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
// for each index of the array
for (turtle of ninjaTurtles) {
  console.log(turtle.toUpperCase());

}
