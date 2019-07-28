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

require('dotenv').config()

mongoose.connect(process.env.DB_URL,{useNewUrlParser : true});
app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine','ejs');
app.use(methodOverride('_method'));
app.use(express.static('assets'));


//PASSPORT CONFIG
app.use(require('express-session')({
    secret  : process.env.PASSPORT_SECRET,
    resave: false,
    saveUninitialized   : false
}))
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) =>{
    res.locals.currUser = req.club;
    next()
})

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