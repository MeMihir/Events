const express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose'),
methodOverride  = require('method-override'),
    passport    = require('passport'),
localStratergy  = require('passport-local'),
    
    Club        = require('./models/club') 

const evtRoutes     = require('./routes/evt'),
    authRoutes      = require('./routes/auth')

mongoose.connect('mongodb://localhost:27017/events_db',{useNewUrlParser : true});
app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine','ejs');
app.use(methodOverride('_method'));
app.use(express.static('assets'));


//PASSPORT CONFIG
app.use(require('express-session')({
    secret  : "Game Over",
    resave: false,
    saveUninitialized   : false
}))
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStratergy(Club.authenticate()))
passport.serializeUser(Club.serializeUser())
passport.deserializeUser(Club.deserializeUser())

//ROUTS CONFIG
app.use(evtRoutes);
app.use(authRoutes);

app.get('/',(req,res) => {
    res.send("HOME PAGE");
})

app.listen(process.env.PORT || 8080 , ()=>{
    console.log('Server Initiated');
})