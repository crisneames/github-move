//////
// Callbacks
//////

setTimeout  (() => {
  console.log('oh....hai!');
}, 4000)

//setTimeout is our higher order function (this function is built into js)


const myGretting = () => {
  console.log('greetings')
}

//setTimeout(myGreeting, 2000)

//////////////////////////////

const socky = () => {
console.log('I will happily iron hour socks');
}

const foodie = () => {
  console.log('I will sort your M&Md do that you never encounter a green one');
}

const pr = () => {
  console.log('I will make sure everyone knows you are the best boss ever!');
}

// socky()
// foodie()
// pr()

const boss = (employee) => {
console.log('I am the boss and you will do as I say!')
employee()
}
boss(socky)
boss(foodie)
boss(pr)

boss(() => {
  console.log("I'll still hand grind your coffee beans, even though you don't know my name")
})


const capitalize = word => {
  console.log(word[0].toUpperCase() + word.substring(1))
}
capitalize('hello')

const excitedWords = (word) => {
  return word + '!'
}


const handleWords = (str, cb) => {
  const arr = str.split(' ')
  const newArr = []
  for (let word of arr) {
    newArr.push(cb(word))
  }
  return newArr.join(' ')
}

console.log(handleWords('hello how are you?', capitalize))
console.log(handleWords('hello how are you?', excitedWords))

console.log(handleWords(handleWords('omg hi how are you', capitalize), excitedWords))
