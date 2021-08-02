const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'testUser1',
        email: 'testUser#1@test.com',
        password: 'testing1'
    },

    {
        username: 'testUser2',
        email: 'testUser#2@test.com',
        password: 'testing2'
    },

    {
        username: 'testUser3',
        email: 'testUser#3@test.com',
        password: 'testing3'
    },

    {
        username: 'testUser4',
        email: 'testUser#4@test.com',
        password: 'testing4'
    },

    {
        username: 'testUser5',
        email: 'testUser#5@test.com',
        password: 'testing5'
    },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;