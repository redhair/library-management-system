var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({
    software: 'psychology-today-api',
    version: '0.0.1'
  });
});

module.exports = router;
