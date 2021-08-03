const router = require('express').Router();
const { Post, User} = require('../models');
const { restore } = require('../../models/Post');
const { post } = require('../api');

// router.get('/profile', (req, res) => {
//     res.render('profile');
// })
router.get('/', (req, res) => {
    Post.findAll({
      where: {
        // use the ID from the session
        user_id: req.session.user_id
      },
      attributes: [
        'id', 'title', 'body', 'user_id'
      ],
      include: [
        {
          model: User,
          attributes: ['username', 'twitter', 'github']
        }
      ]
    })
      .then(dbPostData => {
        
        res.render('profile');
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//   router.get('/edit/:id', (req, res) => {
//     Post.findOne({
//       where: {
//         id: req.params.id
//       },
//       attributes: [
//         'id', 'title', 'body', 'user_id'
//       ],
//       include: [
//         {
//           model: User,
//           attributes: ['username', 'twitter', 'github']
//         }
//       ]
//     })
//       .then(dbPostData => {
//         if (!dbPostData) {
//           res.status(404).json({ message: 'No post found with this id' });
//           return;
//         }

//         res.render('edit-post');
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
// });

// router.get('/create/', (req, res) => {
//     Post.findAll({
//       where: {
//         // use the ID from the session
//         user_id: req.session.user_id
//       },
//       attributes: [
//         'id', 'title', 'body', 'user_id'
//       ],
//       include: [
//         {
//           model: User,
//           attributes: ['username', 'twitter', 'github']
//         }
//       ]
//     })
//       .then(dbPostData => {
        
//         res.render('create-post');
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });


module.exports = router;