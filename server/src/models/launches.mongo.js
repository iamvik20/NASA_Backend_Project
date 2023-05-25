const mongoose = require('mongoose');

const launchesSchema  = new mongoose.Schema({
    flightNumber: {
        type: Number,
        required: true,
    },
    mission:{
        type: String,
        required: true,
    } ,
    rocket: {
        type: String,
        required: true,
    } ,
    launchDate: {
        type: Date,
        required: true,
    },
    // this will add more complexity to the code

    // target: {
    //     type: mongoose.ObjectId,
    //     ref: 'Planet',
    // },
    
    customers : [ String ], 
    target: {
        type: String,
    },
    upcoming: {
        type: Boolean,
        deafult: true,
        // required: true,
    },
    success:  {
        type: Boolean,
        deafult: true,
        required: true,
    },
});

module.exports = mongoose.model('Launch', launchesSchema);