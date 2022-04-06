const express= require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

router.get('/flights/:id/tickets/new', ticketsCtrl.new);
//post the ticket
router.post('/flights/:id/tickets', ticketsCtrl.create);

router.delete('/flights/:flightId/tickets/:ticketId', ticketsCtrl.delete);
// need flights before id bc ticketsRouter is only mounted as / in the server.js
module.exports = router;

