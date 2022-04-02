const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;
	
// const flightSchema = new Schema({
//   airline: String,
//   airport: String,
//   flightNumber: Number,
//   departs: Date
// });
//'ATL', 'DFW', 'DEN', 'LAX' & 'SAN'

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['Delta', 'Southwest','American', 'United']
    },
    airport: {
        type: String,
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    flightNumber: {
        type: Number,
        required: true,
        min: 10,
        max:9999
    }, 
    departs: {
        type: Date
    }
})

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);