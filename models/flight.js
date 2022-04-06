const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String, 
        enum: ['AUS', 'DEN', 'DFW', 'ATL', 'LAX', 'SAN']
    }, 
    arrival: {
    type: Date,
    //removed default function here
    //in the show.ejs, include: name="arrival" in input to match
    }
});


const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['Delta', 'Southwest','American', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DEN', 'DFW', 'ATL', 'LAX', 'SAN']
    },
    flightNumber: {
        type: Number,
        required: true,
        min: 10,
        max:9999
    }, 
    departs: {
        type: Date,
        default: function(){
            return new Date(new Date().setFullYear(new Date().getFullYear()+1))
        }
    },
    destinations: [destinationSchema]
    
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);