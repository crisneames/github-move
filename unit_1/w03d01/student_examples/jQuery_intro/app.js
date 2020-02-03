// if (typeof $ == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file properly!')};

// create an element
const $div = $("<div>");
// console.log($div)
// const div = document.createElement("div")
// console.log(div)

// Querying an element
// const $body = $("body");
// console.log($body);

// Document on Load/Document on ready
$(() => {
  // create an element
  const $div = $("<div>");
  // add meat as a class
  $div.addClass("meat");

  // create an element
  const $h3 = $("<h3>").text("Impossible Burger Meat");
  $div.append($h3);
  // query for an element
  const $body = $("body");
  console.log($body);
$body.append($div);
// });

//
const $anotherDiv = $("<div>").addClass("fruit");
  const $anotherH3 = $("<h3>").text("Strawberries");
  $anotherDiv.append($anotherH3);
  // querying for an element

  // console.log($body);
  $body.append($anotherDiv);
  // query all the divs
  const $divs = $("div")
  // and hide them
  $divs.hide();
  // unhide divs
  $divs.show();

  const $img = $("<img>").attr("src",
    "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)" );
  $body.prepend($img)

  console.log($divs);
  //console.log(
    $divs
    .eq(2)
    .children()
    .text("Kohlrabi");

    const $dairyH3 = $('<h3>').text("Stinky cheese");
    $divs
    .eq(1)
    .empty()
    .append($dairyH3);

    $body.css("border", "3em solid black");


}); // closes document on ready
