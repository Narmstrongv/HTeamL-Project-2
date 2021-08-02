const Sequelize = require('sequelize');

require('dotenv').config();

//below may work now with JAWS defined

if(process.env.JAWSDB_URL){
 const sequelize = new Sequelize(process.env.JAWSDB_URL);
 
}else{
  //create connection to our db
  //use .env file for credentials
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
  
})};

//const sequelize = new Sequelize(process.env.JAWSDB_URL);

//this gives extra log info
// sequelize.authenticate().then(() => {
//   console.log('Connection to database has been established successfully.');
// }).catch(err => {
//   console.error('Unable to connect to database:', err);
// });

// }


module.exports = sequelize;