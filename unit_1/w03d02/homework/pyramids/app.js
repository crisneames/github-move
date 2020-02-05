console.log('It works!');

const pyramid = () => {
for (let i = 0; i <+ 6; i++) {
  const $triangle =$('<div>').addClass('triangle');
  $('body').append($triangle);
}
}

pyramid()
