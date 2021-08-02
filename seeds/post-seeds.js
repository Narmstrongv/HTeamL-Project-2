//.sql
//send info to handlebars

const { Post } = require('../models');

const postdata = [
    {
        title: 'Mac N Cheese Remix',
        body: 'Lorem Ipsum so lets get crazy. So often we avoid running water, and running water is a lot of fun. This is unplanned it really just happens. Its cold, but its beautiful.',
        user_id: 1
    },

    {
        title: 'Pasta Pizza Surprise',
        body: 'Lorem Ipsum Ok Lets have a nice tree right here. There are no mistakes. You can fix anything that happens. Those great big fluffy clouds. We have all at one time or another mixed some mud. See how easy it is to create a little tree right in your world. We might as well make some Almighty mountains today as well, what the heck.',
        user_id: 2
    },

    {
        title: 'Happy Little Ceaser Salad',
        body: 'Lorem Ipsum Everyone is going to see things differently - and thats the way it should be. With practice comes confidence. Learn when to stop. You need to have a very firm paint to do this. In nature, dead trees are just as normal as live trees',
        user_id: 3
    },

    {
        title: 'Changing up the Fish N Chips',
        body: 'Lorem Ipsum Were not trying to teach you a thing to copy. Were just here to teach you a technique, then let you loose into the world. If you do too much its going to lose its effectiveness. Nice little clouds playing around in the sky.',
        user_id: 4
    },

    {
        title: 'My Attempt on the Everything Burrito',
        body: 'Lorem Ipsum We can always carry this a step further. Theres really no end to this. We spend so much of our life looking - but never seeing. A tree needs to be your friend if youre going to paint him. We dont need any guidelines or formats. All we need to do is just let it flow right out of us. We dont make mistakes we just have happy little accidents. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul.',
        user_id: 5
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts; 