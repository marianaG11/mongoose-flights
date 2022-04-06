const Flight = require('../models/flight');  //requiring the flight model
const Ticket = require('../models/ticket');



module.exports = {
    new: newTicket,
    create,
    delete: deleteTicket
}


function create(req, res) {
    req.body.flight = req.params.id 
      Ticket.create(req.body, function(err, ticket) {
          res.redirect(`/flights/${req.params.id}`);
      console.log(err)
      });
}

function newTicket(req, res){
    Ticket.findById(req.params.id, function(err, tickets){
        res.render('tickets/new', {
            title: 'Add Ticket',
            tickets,
            flightId: req.params.id //create a flightId variable to use it in the 
            //action url in the tickets/new.ejs to be able to add a new ticket
            //the action has to match the route
            //adding the flightId makes it dynamic 
            //action= '/flights/<%=flightId%>/tickets' matches router.post('/flights/:id/tickets'
        })
    })
}


function deleteTicket (req, res) {
    console.log(req.params.ticketId, 'req.params.id, delete controller');
    if (!req.params.ticketId) return;
    Ticket.findByIdAndDelete(req.params.ticketId, function(err, deletedTicket){
        res.redirect(`/flights/${req.params.flightId}`)
    });
}