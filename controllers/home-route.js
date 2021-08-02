const router = require('express').Router();
 
const {Post, User} = require('../models');
const { restore } = require('../models/Post');
const { post } = require('./api');


router.get('/', (req, res)=>{
    Post.findAll({
        attributes: [
            'id',
            'title',
            'created_at',
            'post_content'
          ],
          include: [
            {
              model: Comment,
              attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
              include: {
                model: User,
                attributes: ['username', 'twitter', 'github']
              }
            },
            {
              model: User,
              attributes: ['username', 'twitter', 'github']
            }
          ]
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


module.exports = router;