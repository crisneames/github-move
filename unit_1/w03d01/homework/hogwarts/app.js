// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file!')};
// console.log('Homework');

$(() => {
	//Year 1
  //
  //Query div with the id of container
  const $container = $('#container')
  console.log($container);
// creates a new h1 tag
const $h1 = $("<h1>").text("Hogwarts");
$($h1).appendTo('body')
console.log($h1);



});
