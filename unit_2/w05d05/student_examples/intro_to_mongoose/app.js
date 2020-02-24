// Dependencies
const mongoose = require('mongoose')
const Tweet = require('./tweet.js')

//configuration
const mongoURI = 'mongodb://localhost:27017/' +
'tweets'
// making a shorter alias for less typing
const db = mongoose.connection

// Connect to mongo
mongoose.connect(mongoURI, { useNewUrlParser: true }, () => {
  console.log('the connection with mongod is established')
})

// Connection Error/Success - optional but can be helpful
// Define callback functions for various events
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))

const myFirstTweet = {
  title: 'Deep Thoughts',
  body: 'Friends, I have been navel-gazing',
  author: 'Karolin'
}

// Tweet.create(myFirstTweet, (error, tweet) => {
//   if (error) {
//     //if there is an error console log it
//     console.log(error)
//   } else {
//     // else show us the created tweet
//     console.log(tweet)
//   }
//   // get control of terminal back
//   // else just use control c
//   db.close()
// })

const manyTweets = [
  {
    title: 'Deep Thoughts',
    body: 'Friends, I have been navel-gazing',
    author: 'Karolin'
  },
  {
    title: 'Sage Advice',
    body: 'Friends, I am vegan and so should you',
    author: 'Karolin',
    likes: 20
  },
  {
    title: 'Whole Reality',
    body:
      'I shall deny friendship to anyone who does not exclusively shop at Whole Foods',
    author: 'Karolin',
    likes: 40
  },
  {
    title: 'Organic',
    body:
      'Friends, I have spent $2300 to be one of the first people to own an organic smartphone',
    author: 'Karolin',
    likes: 162
  },
  {
    title: 'Confusion',
    body:
      'Friends, why do you just respond with the word `dislike`? Surely you mean to click the like button?',
    author: 'Karolin',
    likes: -100
  },
  {
    title: 'Vespa',
    body:
      'Friends, my Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph',
    author: 'Karolin',
    likes: 2
  },
  {
    title: 'Licensed',
    body:
      'Friends, I am now officially licensed to teach yogalates. Like this to get 10% off a private lesson',
    author: 'Karolin',
    likes: 3
  },
  {
    title: 'Water',
    body:
      'Friends, I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how',
    author: 'Karolin'
  }
]
//   Tweet.insertMany(manyTweets, (error, tweets) => {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log(tweets)
//   }
//   db.close()
// })

// read portion

// find all
// Tweet.find((err, tweets) => {
//   console.log(tweets)
//   db.close()
// })

// find all but limit fields returned
// Tweet.find({}, 'title body', (err, tweets) => {
//   console.log(tweets)
//   db.close()
// })

// look for a specific tweet
// Tweet.find({ title: 'Water' }, (err, tweet) => {
//   console.log(tweet)
//   db.close()
// })

// advanced query options - tweets that have greater than or equal to 20 likes
 // Tweet.find({ likes: { $gte: 20 } }, (err, tweets) => {
 //   console.log(tweets)
 //   db.close()
 // })

 // Delete options

//  Tweet.findOneAndRemove({ title: 'Deep Thoughts' }, (err, tweet) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('This is the deleted tweet:', tweet)
//   }
//   db.close()
// })

//return the updated object
// Tweet.findOneAndUpdate(
//   { title: 'Vespa' },
//   { sponsored: true },
//   { new: true }, //return the updated object - by default it returns the original one
//   (err, tweet) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(tweet)
//     }
//     db.close()
//   }
// )

// Tweet.countDocuments({ likes: { $gte: 20 } }, (err, tweetCount) => {
//   console.log('the number of tweets with more than 19 likes is', tweetCount)
//   db.close()
// })

//Do a search, limit the number of returned queries to 2, sort them by title
// Tweet.find({ likes: { $gte: 20 } }, 'title -_id')
//   .limit(2)
//   .sort('title')
//   .exec((err, tweets) => {
//     console.log(tweets)
//     db.close()
//   })
