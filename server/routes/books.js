var express = require('express');
var router = express.Router();
var Book = require('../models/Book.js');
var Event = require('../models/Event.js');

router.get('/', (req, res, next) => {
  Book.find((err, books) => {
    if (err) next(err);
    res.json(books);
  });
});

router.get('/:id', (req, res, next) => {
  Book.findById(req.params.id, (err, book) => {
    if (err) next(err);
    res.json(book);
  });
});

router.post('/', (req, res, next) => {
  Book.create(req.body, (err, createdBook) => {
    if (err) next(err);
    const event = {
      name: 'Book Creation',
      bookState: createdBook,
      bookId: createdBook._id,
      timestamp: Date.now()
    };
    Event.create(event, (err, event) => {
      if (err) next(err);
    });
    res.json(createdBook);
  });
});

router.put('/:id', (req, res, next) => {
  Book.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBook) => {
    if (err) next(err);
    const event = {
      name: 'Book Update',
      bookState: updatedBook,
      bookId: updatedBook._id,
      timestamp: Date.now()
    };
    Event.create(event, (err, event) => {
      if (err) next(err);
    });
    res.json(updatedBook);
  });
});

router.delete('/:id', (req, res, next) => {
  Book.findByIdAndRemove(req.params.id, req.body, (err, deleted) => {
    if (err) next(err);
    res.json(deleted);
  });
});

module.exports = router;
