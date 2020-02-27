const vowels = ["a", "e", "i", "o", "u"]

const vowelCheck = (text) => {
let counter = 0;
for(let letter of text)
  if (vowels.includes(letter)) {
    counter ++
  }
  return counter;
}
  console.log(vowelCheck('hello'))
