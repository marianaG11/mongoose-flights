
const Flight= require('../models/flight'); //require Flight model

module.exports = {
    new: newFlight,
    create, 
    index,
    show
};

function show(req, res){
    Flight.findById(req.params.id, function(err, flight){
        res.render('flights/show', {title: 'Flight Detail', flight}); //also define title here, bc this will have a diff value
    }); //since the show page has a diff title, the value will be different than the one in the newFlight function
}


function newFlight(req, res){
    res.render('flights/new', {title: 'Add a New Flight'});  //define the title variable and give it a value
    // const newFlight = new Flight();
    // // Obtain the default date
    // const dt = newFlight.departs;
    // // Format the date for the value attribute of the input
    // const departsDate = dt.toISOString().slice(0, 16);
    // res.render('flights/new', {title:'Add a New Flight', departsDate });
}

function create(req, res) {
    console.log(req.body)
    const flight = new Flight(req.body);
    console.log(flight)
    flight.save(function(err){
        console.log(err)
        if (err) return res.render('/flights/new');
        console.log(flight);
        res.redirect('/flights/new');
    });
}

function index(req, res){
    Flight.find({}, function(err, flights){
        res.render('flights/index', {
            flights, 
            title: 'All Flights'
        });
    });
}

