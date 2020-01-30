const capitalize = (word) => {
 console.log(word.charAt(0).toupperCase()) + word.slice(1)

 }


capitalize('hello') // 'Hello'
capitalize('howdy') // 'Howdy'
capitalize('aloha') // 'Aloha'

//////
//Callbacks
//////

//passing a function into another function is called Callback
//higher order - a function that takes another function as an argument

//A means of controlling when function gets called
//A console.log to happen after 5 seconds
//stacked functionality
