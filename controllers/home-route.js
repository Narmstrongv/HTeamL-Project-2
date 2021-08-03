const router = require('express').Router();
const sequelize = require('../config/connection');

const {Post, User} = require('../models');
const { restore } = require('../models/Post');
const { post } = require('./api');

var postdata = [
    {
        id: 1,
        title: 'Mac N Cheese Remix',
        body: 'Lorem Ipsum so lets get crazy. So often we avoid running water, and running water is a lot of fun. This is unplanned it really just happens. Its cold, but its beautiful. Nature is so fantastic, enjoy it. Let it make you happy. All you need is a dream in your heart, and an almighty knife. Paint anything you want on the canvas. Create your own world. This is probably the greatest thing thats ever happened in my life. Its all a game of angles.',
        user_id: 1
    },]; 

router.get('/', (req, res)=>{
    // Post.findAll({
        
    // })
    // .then(postData=>{
    //     const newPostData = postData.map(post=>{
    //         return post.get({plain:true})
    //     })

    //     res.render('homepage', { posts: newPostData})
    // }).catch(err => {
    //     console.error('Unable to load homepage:\n', err);
    //   });  
    res.render('homepage', {posts: postdata})
})

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;