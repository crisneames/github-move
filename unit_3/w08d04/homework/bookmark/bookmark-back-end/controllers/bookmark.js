const bookmark = require('express').Router()
const Bookmark = require('../models/bookmark.js')

// Index route
bookmark.get('/', (req, res) => {
  Bookmark.find({}, (err, foundBookmark) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(foundBookmark)
  })
})

// Create route
bookmark.post('/', async(req, res)  => {
  Bookmark.create(req.body, (error, createdBookmark) => {
    if(error) {
      res.status(400).json({error: error.message})

    }
    res.status(200).send(createdBookmark)
  })
})

// Delete route
bookmark.delete('/:id', (req, res) => {
  Bookmark.findByIdAndRemove(req.params.id, (err, deletedBookmark) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(deletedBookmark)
  })
})
// Update route
bookmark.put('/:id', (req, res) => {
  Bookmark.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBookmark) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(updatedBookmark)
  })
})

module.exports = bookmark
