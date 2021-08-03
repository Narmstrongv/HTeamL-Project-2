const router = require('express').Router();
const sequelize = require('../../config/connection');
const {Post, User}= require('../../models');

// GET /api/post
var postdata = [
  {
      id: 1,
      title: 'Mac N Cheese Remix',
      body: 'Lorem Ipsum so lets get crazy. So often we avoid running water, and running water is a lot of fun. This is unplanned it really just happens. Its cold, but its beautiful.',
      user_id: 1
  },]; 
router.get('/', (req, res) => {

    // Post.findAll({
    //     attributes: ['id', 'title', 'body', 'user_id'],
    //     //this is where SEQ is being called
    //     //[sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    //     include: [
    //       {
    //         model: User,
    //         attributes: ['username']
    //       }
    //     ]
    //   })
      // .then(dbPostData =>
      //   //ignoring dbPostData because its empty.
      //   res.render('homepage',postdata))
      //     // res.json(postdata))
      // .catch(err => {
      //   console.log(err);
      //   res.status(500).json(err);
      // });
      // res.render('homepage',postdata)
});

// GET /api/users/1
router.get('/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', , 'title', 'body', 'user_id'],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


// POST /api/users
router.post('/', (req, res) => {
    Post.create({
      title: req.body.title,
      post_url: req.body.body,
      user_id: req.body.user_id
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
// PUT /api/users/1
router.put('/:id', (req, res) => {
    Post.update(
      {
        title: req.body.title
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// DELETE /api/users/1
router.delete('/:id', (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;