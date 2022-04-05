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
    // timestamps: true,
    default: function(){
        return new Date(new Date().setFullYear(new Date().getFullYear()+1))
    //     //time shows up one year from today, so function works here but not when trying to make a new flight
     }
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
        // default: 'DEN' //not working
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
            //not showing as next year for default
        }
    },
    destinations: [destinationSchema]
    
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);