
const Flight= require('../models/flight'); //require Flight model

module.exports = {
    new: newFlight,
    create, 
    index
};

function newFlight(req, res){
    res.render('flights/new');
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err){
        if (err) return res.render('flights/new');
        console.log(flight);
        res.redirect('/flights/new');
    });
}

function index(req, res){
    Flight.find({}, function(err, flights){
        res.render('flights/index', {
            flights, 
            Airline: 'All Flights'
        });
    });
}