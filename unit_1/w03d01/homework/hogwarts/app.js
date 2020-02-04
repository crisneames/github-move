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

// Year 3
//
const $list = $("<ul>").attr("storage", "trunk");
$list.appendTo('div');

const $li1 = $("<li>").text('butter beer');
$li1.appendTo('ul');
const $li2 = $("<li>").text('invisibility').addClass('secret');
$li2.appendTo('ul');
const $li3 = $("<li>").text("magic map").addClass('secret');
$li3.appendTo('ul');
const $li4 = $("<li>").text("time turner").addClass('secret');
$li4.appendTo('ul');
const $li5 = $("<li>").text("leash").addClass('owl');
$li5.appendTo('ul');
const $li6 = $("<li>").text("Bertie Bott's Every Flavor [Jelly] Beans");
$li6.appendTo('ul');

//Year 4
//
const $h5 = $("<h5>").text("Spring 2017");
$h5.appendTo("body");

const $table = $("<table>");
$table.appendTo("body");

// const $thead = $("<thead>");
// $thead.appendTo("table");

// const $tr4 = $("<tr>");
// $tr4.appendTo("thead");

 // const $th = $("<th>").text("Day");
 // $th.appendTo("<thead>");
 //
 // const $th2 = $("<th>").text("Classes");
 // $th.appendTo("<thead>");

const $tr = $("<tr>").text("Monday");
$tr.appendTo("table");

const $td1 = $("<td>").text("Herbology");
$td1.appendTo("tr");
// const $td2 = $("<td>").text("Herbology");
// $td2.appendTo("tr");

const $tr2 = $("<tr>").text("Tuesday")
$tr2.appendTo("table")
const $td3 = $("<td>").text("Potions");
$td3.appendTo($tr2);
// const $td4 = $("<td>").text("Potions")
// $td4.appendTo("tr");
// const $tr3 = $("<tr>");
// $tr3.appendTo("table");
// const $td5 = $("<td>").text("Wednesday");
// $td5.appendTo("tr");
// const $td6 = $("<td>").text("History of Magic")
// $td6.appendTo("tr");

// Year 5
//
 $wand.remove();
 $li1.remove();
//I get an error here
// const $wand2 = $("<h4>").text("New Wand")
// $wand2.AppendTo($pet);

//$wand2.css('color', 'indigo');

// Year 6
//
$(".secret").hide("slow").delay("2000");

$(".secret").show("slow");

// Year 7
//
$h5.text("Spring 2018");


});
