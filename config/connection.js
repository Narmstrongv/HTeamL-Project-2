const Sequelize = require('sequelize');

require('dotenv').config();

if(process.env.JAWSDB_URL){
 const sequelize = new Sequelize(process.env.JAWSDB_URL);
 
}else{
  // create connection to our db
// use .env file for credentials
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
  
});

}


module.exports = sequelize;