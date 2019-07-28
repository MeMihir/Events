var express     = require('express'),
    router      = express.Router(),
    passport    = require('passport'),
    Club        = require('../models/club')

//REGISTER ROUTES
router.get("/signup",(req,res) => {
    res.render("auth/register")
})

router.post('/signup', (req,res) => {
    Club.register(new Club(req.body.newClub), req.body.password, (err, user) =>{
        if(err){
            console.log(err);
            res.redirect('/signup');
        }
        else{
            // passport.authenticate('local')(req,res, ()=> {
            //     console.log('LOGGED IN');
            //     res.redirect('/events');
            // })
            res.redirect('/events'); 
        }
    })
})


//LOGIN
router.get('/login', (req,res)=>{
    res.render('auth/login');
})

router.post('/login', passport.authenticate('local',{
    successRedirect : '/events',
    failureRedirect : '/login'
}))

//Logout
router.get('/logout', (req,res) => {
    req.logout();
    res.redirect('/');
})
module.exports = router;