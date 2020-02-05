console.log('It works!');

const generateSquares = () => {
	for (let i=1; i <= 32; i++) {
		console.log(i);
		const $square = $('<div>').addClass('sizeColor');
    const $square2 = $('<div>').addClass('szColor');
    console.log(i);
    // $square.css('background-color', randColorRGB());
    // $square.text(i);
		 $('body').append($square, $square2);
	}
}

generateSquares()
