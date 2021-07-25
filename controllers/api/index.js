//more info on this - 13.1.6
//REST(Representational State Transfer)-ful API(Application Programming Interface)
//Rules to make it RESTful
//1 - Name endpoints in a way that describes data
//2 - Use methods like GET, POST, PUT, DELETE to describe action you take to interface w/endpoint
//3 - Use proper status codes to indicate errors (i.e. 400, 404, 500)

//controllers = routes
//index here collects routes for server connection

//this is more for back-end

const router = require('express').Router();

//insert routes here - can use as template
const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);

module.exports = router;
