const router = require('express').Router();
 
const {User} = require('../../models');
const { restore } = require('../../models/Post');
const { post } = require('../api');


router.get('/login', (req, res)=>{

        res.render('login');
})


module.exports = router;