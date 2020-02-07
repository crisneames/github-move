 // console.log($);
 // console.log('modal practice app.js is linked to this index.html');

$( () => {
  // Variables ===============
  // Grabbing About the Game button
const $openBtn = $('#openModal');

// Grabbing modal element
const $modal = $('#modal');

// Grabbing close button
const $closeBtn = $('#close');


// Event handlers =============
// Event handler to open the modal
const openModal = () => {
  $modal.css('display', 'block');
}

// Event handler to close the modal
const closeModal = () => {
  $modal.css('display', 'none');
}

// Event listeners ================

//Add event listener to About the Game button
$openBtn.on('click', openModal);
//Add event listener to Close button
$closeBtn.on('click', closeModal);

//Functions ===========
setTimeout(openModal, 5000);

});
