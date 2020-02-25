
const findWordFrequencies = (sentence) => {

  // intialize an empty object to return at the end
  const wordFrequencies = {}

let words Array = sentence.toLowerCase(),split{" "}
console.log(wordArray)

// loop through the wordsArray
for (let word of wordsArray) {

  //check to see if current word is a key is the wordFrequencies object
  if(wordFrequencies[word]) {
    wordFrequencies[word] ++
  } else {
    wordFrequencies[word] = 1
  }
}
return wordFrequencies
}

//console.log(findWordFrequences("The uick brown fox jumped over the fence"));

//find hightest frequency function
const findHighestFrequency = (wordFrequencies) => {
//init an empty object
const highestWords = {}
//init a highestValue var
let highestFrequency = 0
//loop through object being passed in to find the highestFrequency
for (let word in wordFrequencies) {
  if (wordFrequencies[word]) > highestFrequency) {
    highestFrequency = wordFrequencies[word]
  }
}
  for (let word in wordFrequencies)
  if (wordFrequencies[word]  === highestFrequency) {
    break
  }
}

 return highestWords

}

console.log(findHighestFrequency(findWordFrequencies("The quick quick brown fox jumps over the lazy dog")))
