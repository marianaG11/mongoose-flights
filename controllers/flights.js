
const Flight= require('../models/flight'); //require Flight model
const Ticket = require('../models/ticket');


module.exports = {
    new: newFlight,
    create, 
    index,
    show,
};

function show(req, res){
    const newFlight = new Flight();
    const dt = newFlight.departs;
    const departsDate = dt.toISOString().slice(0, 16);
    Flight.findById(req.params.id, function(err, flight){
        Ticket.find({flight: flight._id}, function(err, tickets) { //, //step 2 for lab finding ticket based on flight info
        res.render('flights/show', {title: 'Flight Details', flight, departsDate, tickets}); //also define title here, bc this will have a diff value
        //include the rest of the variables
    });
 }); //since the show page has a diff title, the value will be different than the one in the newFlight function
}


function newFlight(req, res){
    // res.render('flights/new', {title: 'Add a New Flight'});  //define the title variable and give it a value
    const newFlight = new Flight();
    // Obtain the default date
    const dt = newFlight.departs;
    // Format the date for the value attribute of the input
    const departsDate = dt.toISOString().slice(0, 16);
    res.render('flights/new', {title:'Add a New Flight', departsDate });
}

function create(req, res) {
    console.log(req.body)
    if (!req.body.departs){
        req.body.departs = undefined; //this is bc mongoose only applies a default if the value of 
        //the path is undefined 
    }
    const flight = new Flight(req.body);
    console.log(flight)

    flight.save(function(err){
        console.log(err)
        if (err) return res.render('flights/new');
        console.log(flight);
        res.redirect(`/flights/${flight._id}`);
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
