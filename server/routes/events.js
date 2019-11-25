var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Event = require('../models/Event.js');

router.get('/', function(req, res, next) {
  Event.find({ bookId: req.query.id }, function(err, events) {
    if (err) return next(err);
    res.json(events);
  });
});

router.get('/:id', (req, res, next) => {
  Event.findById(req.params.id, (err, event) => {
    if (err) next(err);
    res.json(event);
  });
});

router.post('/', function(req, res, next) {
  Event.create(req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', function(req, res, next) {
  Event.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
