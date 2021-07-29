//once models are built make sure connection looks like below
//models are like classes that we define, like a mold for the data
//this index is to collect & export model data

const User = require('./User'); //<-path of model

//added Post model 

const Post = require('./Post'); // <-- path of Post model 


// define model associations  

User.hasMany(Post, {
    foreignKey : 'user_id'
});

Post.belongsTo( User, {
    foreignKey: 'user_id'
});


module.exports = { User, Post };

