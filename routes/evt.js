var express     = require('express'),
    router      = express(),
    Event       = require('../models/evt')


//INDEX
router.get('/events', (req,res) => {
    Event.find({}, (err,events) => {
        if (err) {
            console.log(err);
            res.redirect('/');
        } else {
            res.render('evts/index',{events : events});
        }
    })
})

//CREATE
router.get('/events/new',(req,res) => {
    res.render('evts/upload');
})

//UPLOAD
router.post('/events/new',(req,res) => {
    Event.create(req.body, (err, event) => {
        if(err){
            console.log(err);
            res.redirect('/events');
        }
        else{
            res.redirect('/events');
        }
    })
})

//SHOW
router.get('/events/:id',(req,res) => {
    Event.findById(req.params.id, (err,event) => {
        if (err) {
            console.log(err);
            res.redirect('/events');
        } else {
            res.render('evts/show',{event : event});
        }
    })
})

//EDIT
router.get('/events/:id/edit',(req,res) => {
    Event.findById(req.params.id, (err, event) => {
        if (err) {
            console.log(err);
            res.redirect('/events');
        } else {
            res.render('evts/edit', {event : event});
        }
    })
})

//UPDATE
router.put('/events/:id',(req,res) => {
    Event.findByIdAndUpdate(req.params.id, req.body, (err, event) => {
        if (err) {
            console.log(err);
            res.redirect('/events');
        } else {
            res.redirect('/events/'+event._id);
        }
    })
})

//DELETE
router.delete('/events/:id',(req,res) => {
    Event.findOneAndRemove(req.params.id, (err, event) => {
        if (err) {
            console.log(err);
            res.redirect('/events');
        } else {
            res.redirect('/events');
        }
    })
})

module.exports = router;