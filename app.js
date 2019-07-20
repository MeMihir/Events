var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose'),
methodOverride  = require('method-override')

var event       = require('./models/evt') 


mongoose.connect('mongodb://localhost:27017/events_db',{useNewUrlParser : true});
app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine','ejs');
app.use(methodOverride('_method'));
app.use(express.static('assets'));

app.get('/',(req,res) => {
    res.send("HOME PAGE");
})

app.listen(process.env.PORT || 8080 , ()=>{
    console.log('Server Initiated');
})