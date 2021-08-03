const router = require('express').Router();
const sequelize = require('../config/connection');

const {Post, User} = require('../models');
const { restore } = require('../models/Post');
const { post } = require('./api');


router.get('/', (req, res)=>{
    Post.findAll({
        
    })
    .then(postData=>{
        const newPostData = postData.map(post=>{
            return post.get({plain:true})
        })

        res.render('homepage', { posts: newPostData})
    }).catch(err => {
        console.error('Unable to load homepage:\n', err);
      });  
})

router.get('/login', (req, res) => {
    // if (req.session.loggedIn) {
    //     res.redirect('/');
    //     return;
    // } else
    res.render('login');
});

router.get('/signup', (req, res) => {
    // if (req.session.loggedIn) {
    //     res.redirect('/');
    //     return;
    // } else
    res.render('signup');
});

module.exports = router;