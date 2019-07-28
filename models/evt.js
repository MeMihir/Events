var mongoose    = require('mongoose');

var eventSchema = new mongoose.Schema({
    name        : String,
    club        : String,
    image       : String,
    date        : Date,
    fees        : Number,
    OD          : Boolean,
    abstract    : String,
    certificate : Boolean,
    prize       : Number,
    contact     : [
        {
            name : String,
            number : Number 
        }
    ]
});

module.exports = mongoose.model('Event',eventSchema);