var express = require('express');
var router = express.Router();
var json = require('../public/data/percap.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  var data={
    "json" : json,
    "id" : req.query.id || 0
  }
  res.render('percap',{"data" : data});
});

module.exports = router;
