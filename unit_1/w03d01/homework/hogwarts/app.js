// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file!')};
// console.log('Homework');

$(() => {
	//Year 1
  //
  //Query div with the id of container
  const $container = $('#container')
  //console.log($container);
// creates a new h1 tag and add text
const $h1 = $("<h1>").text("Hogwarts");
// append the h1 tag to the body
$("body").append($h1);
//console.log($h1);

// Year 2
//
//Name - addd an h2 with the text Snowy
const $name = $("<h2>").text("Snowy");
// House - add an h3 with the text Ravenclaw
const $house = $("<h3>").text("Ravenclaw");
// Pet - add an h4 tag with the text Jo
const $pet = $("<h4>").text('Jo');
// add the class of owl to h4 pet
$pet.addClass("owl");
//wand - add an h4 with the text Wizzy
const $wand = $("<h4>").text("Wizzy");
// Append each to the body
$($name).appendTo("body");
$($house).appendTo("body");
$($pet).appendTo("body");
$($wand).appendTo('body');
//console.log($name, $pet, $wand, $house);




});
