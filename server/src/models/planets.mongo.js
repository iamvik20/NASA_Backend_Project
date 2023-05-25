const mongoose = require('mongoose');


const planetSchema = new mongoose.Schema({
    keplerName: {
        type: String,
        required: true,  
    }
});

//coonects palnetSchema with the "Planets" collection
module.exports = mongoose.model('Planet' , planetSchema);