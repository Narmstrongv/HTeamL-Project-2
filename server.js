//basic server setup from 13.5 - needs to be tested

const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes, comes from ./controller
app.use(routes);

// turn on connection to db and server
//.sync means SEQ takes models & connects them to assoc. DB tables
//force: true will drop & recreate all DB tables on startup
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});