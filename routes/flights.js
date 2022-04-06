var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

/* GET users listing. */

router.get('/', flightsCtrl.index); // '/' means home page = index = localhost3000/flights


// GET /flights/new
router.get('/new', flightsCtrl.new);

router.get('/:id', flightsCtrl.show);

//post /flights
router.post('/', flightsCtrl.create);


module.exports = router;
