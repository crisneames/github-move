// console.log('app.js loaded for palette picker');
// console.log($)

const $colorPalette = $('#color-palette')
const $myPalette = $('#my-palette')
const $generate = $('#generate')

const makePalette = () => {
  $colorPalette.empty()
  for (let i = 0; i < 150; i++) {
    const $square = $('<div>')
    $square.addClass('square')
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    // make a string that looks like rgb(100,100,100)
    const color = 'rgb('+ red + ',' + green + ',' + blue +')';
    $square.css('background-color', color);
    $square.on('click', addColor);

    $colorPalette.append($square)
  }
}

const addColor = (event) => {
const color = $(event.currentTarget).css('background-color')
console.log(color)
onst $square = $('<div>');
	$square.addClass('square');
	$square.css('background-color', color);

	$myPalette.append($square)

}
$generate.on('click', makePalette)

makePalette()
