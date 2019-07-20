var express     = require('express'),
    router      = express(),
    event       = require('../models/evt')


//INDEX
router.get('/events', (req,res) => {
    res.send('Events List');
})

//SHOW
router.get('/events/:id',(req,res) => {
    res.send('Details Page');
})

//UPLOAD
router.post('/events/upload',(req,res) => {
    res.send('Upload Events');
})

//EDIT
router.('/events/:id/edit',(req,res) => {
    res.send('Edit Event');
})

//UPDATE
router.put('/events/:id',(req,res) => {
})

//DELETE
router.delete('/events/:id',(req,res) => {

})

module.exports = router;