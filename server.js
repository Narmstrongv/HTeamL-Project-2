//basic server setup from 13.1.6
//server opens on http://localhost:3003/api/etc.

const path = require('path');
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

const expressHandlebars = require('express-handlebars')
const app = express();
const PORT = process.env.PORT || 3003;
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: 'bigdawg',
    cookie: {
          // Session will automatically expire in 10 minutes
          expires: 20 * 60 * 1000
    },
    resave: true,
    rolling: true,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    }),
  };
  
  app.use(session(sess));

// turn on routes, comes from ./controller
app.use(routes);
//turn on connection to db and server
//.sync means SEQ takes models & connects them to assoc. DB tables
//force: true will drop & recreate all DB tables on startup
//good when SEQ models are changed
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening to ${PORT}` ));
});