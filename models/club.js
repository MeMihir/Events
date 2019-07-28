const mongoose      = require('mongoose'),
      passport      = require('passport'),
passportLocalMongoose   = require('passport-local-mongoose')

const ClubScheama  = new mongoose.Schema({
    username    : String,
    abstract    : String,
    logo        : String,
    email       : String,
    password    : String,
    rating      : Number,
    
})

ClubScheama.plugin(passportLocalMongoose);
module.exports = mongoose.model("Club",ClubScheama)