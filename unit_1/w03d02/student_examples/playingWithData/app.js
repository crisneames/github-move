//console.log('You are connected!');

// An array of objects
const data = [
  { name: "Megatron", address: "Cybertron" },
  { name: "Some guy", address: "Some street" },
  { name: "Grace Hopper", address: "Arlington, Virginia" },
  { name: "Ching Shih", address: "The High Seas" },
  { name: "Slimer", address: "The Library" },
  { name: "Umbra", address: "The Void" },
  { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
  { name: "Matt Huntington", address: "Remote" },
  { name: "Ronald McDonald", address: "Casa del McDonalds" },
  { name: "Jem", address: "Starlight Music" }
];



// Populate the page with data from the array. If the data
//in the array is every changed. the page can be re-Populated
// for (let i=0; i < data.length; i++) {
// 	console.log(data[i]);
// };

const populateData = (list) => {
  for (let i=0; i < list.length; i++) {
    console.log(list[i]);
    const $infoContainer = $('<div>').addClass('info-container');
    const $nameDiv = $('<div>').addClass('name').text(list[i].name);
    const $addressDiv = $('<div>').addClass('address').text(list[i].address);
    $infoContainer.append($nameDiv);
    $infoContainer.append($addressDiv);
    $('body').append($infoContainer);
  }
}
//data restructuring using the curly brackets on first
//line. You can switch name and address params around and
//it will still push data. Objects are indexed by the key
//and not the position
const addData = ({name, address}) => {
  data.push({ name: name, address: address });

  populateData(addData);
}

// This is also object destructuring

const ric = {
  name: 'Ric Mershon',
  something: null,
  other: 'other',
  address: 'Cool Mershon Million Dollar Estate',
} // Pull only the name of the object ric
const { name } = ric;
console.log(name)
// Callback function - Create a container that will house
// each name and address.
$(() => {

  for (let i=0; i < data.length; i++) {
    console.log(data[i]);
    const $infoContainer = $('<div>').addClass('info-container');
    // At this point the divs are empty
    // Add divs for the names
    const $nameDiv = $('<div>').addClass('name').text(data[i].name);
    // add the address div
    const $addressDiv = $('<div>').addClass('address').text(data[i].address);
    // Append
    $infoContainer.append($nameDiv);
    $infoContainer.append($addressDiv);
    $('body').append($infoContainer);

  }

});

$(() => {

  populateData(data);
  populateData([{name: 'Cristi', address: 'coolest place on earth'}, {name:'Eric', address:'Van meter Mansion'}]);

const $btn = $('<button>').addClass('click-me').text('Click me please')
$btn.on('clik', addData(ric))
$('body').append($btn);


});
