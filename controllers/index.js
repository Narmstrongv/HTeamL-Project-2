//this index collects endpoints & prefixes them with /api 

const router = require('express').Router();

//calls the api folder
const apiRoutes = require('./api');
const homeRoutes = require('./home-route');

//this makes /api endpoint?
//or is it just using the api folder?
//so you need to type '3001/api/whatever'
router.use('/api', apiRoutes);

router.use('/', homeRoutes)

//gives 404 err if you make a request to non-existant endpoint
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;