var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({ title: 'Psychology Today Express Server' });
});

module.exports = router;
