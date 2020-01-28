//console.log('connected!');


//Get user input in the browser

// let answer = prompt('Are you arriving or leaving?', 'Arriving or Leaving');
// console.log(answer);

const greeting = () => {
alert('oh hai');
}
const sayBye = () => {
  alert('Bye');
}

const formatResponse = (response) => {
  return response[0].toLowerCase()
}





 answer = formatResponse(answer)

// if (answer === 'a') {
//   greet()
// } else if (answer === 'l') {
//   sayBye()
// }
//
// if (answer === '(a)rriving') {
//   alert('Hi')
// } else if (answer === '(l)eaving') {
//   alert('Bye')
// } else {
//   alert('uh oh something was mistyped')
// }

// let action
//
// do {
//   action = prompt('What do you want to do?', 'Your action');
// }
//
// console.log(action);

// const func1 = () => {
//   console.log('hello')
// }
// const func2 = () => {
//   console.log('oh hai')
//   func1()
// }
// func2()

// const func1 = () => {
//   console.log(1)
//   func2() // why can I call this now, even though the definition is below?
//   func3()
//   console.log('Finished!')
// }
// const func2 = () => {
//   console.log(2)
//   func4()
//   func6()
// }
// const func3 = () => {
//   console.log(3)
//   func5()
// }
// const func4 = () => {
//   console.log(4)
// }
// const func5 = () => {
//   console.log(5)
// }
// const func6 = () => {
//   console.log(6)
// }
// func1()

alert('Welcome to the Lemon Capitalist');

let lemons
let money

const start = () => {
  lemons = 0
  money = 20
  askForAction()
}
const showStatus = () => {
  alert(`You have ${lemons} lemons and $${money} money`)
}
const formatResponse = (response) => {
  return response[0].toLowerCase()
}
const askForAction = () => {
  showStatus()
  let choice = prompt('What do you want to do?', '(b)uy lemon / (e)at lemon / (r)estart')
  if (!choice) {
    alert('Ok! No more lemons!')
    return
  }
  choice = formatResponse(choice)
  if (choice === 'b') {
    buyLemon()
  } else if (choice === 'e') {
    eatLemon()
  } else if (choice === 'r') {
    start()
  } else {
    alert('Please choose a valid choice!')
    start()
  }
}
const buyLemon = () => {
  lemons++
  money -= 1
  askForAction()
}
const eatLemon = () => {
  lemons--
  askForAction()
}

start()
