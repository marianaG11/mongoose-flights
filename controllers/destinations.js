const Flight = require('../models/flight');  //requiring the flight model
//bc we will need it to access the flight document to add a destination

module.exports = {
    create
};

//then write the create function
//push in an object that's compatible with the embedded document's schema, 
//call save on the parent doc, and redirect to wherever makes sense for the app.
function create(req, res){
    Flight.findById(req.params.id, function(err, flight){
        flight.destinations.push(req.body);
        flight.save(function(err){
            console.log(flight)
            res.redirect(`/flights/${flight._id}`);
        });
    });
}