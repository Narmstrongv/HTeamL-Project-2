// //Create dummy data for local changes
// //must be changed when deployed Heroku

// //this index connects & exports all seed data

// const seedUsers = require('./user-seeds');
// const seedPosts = require('./post-seeds');

// //connecting SEQ from /connection
// const sequelize = require('../config/connection');

// //aysmmetrical function that seeds database
// const seedAll = async () => {
//     await sequelize.sync({ force: true });
//     console.log('---Sequelize synced!---');

//     await seedUsers();
//     console.log('---Users Seeded!---');

//     await seedPosts();
//     console.log('---Posts Seeded!---');

//     process.exit(0);
// };

// seedAll();

