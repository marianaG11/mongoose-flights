var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// GET /flights/new
router.get('/new', flightsCtrl.new);

//post /flights
router.post('/', flightsCtrl.create);

router.get('/index', flightsCtrl.index);

module.exports = router;
