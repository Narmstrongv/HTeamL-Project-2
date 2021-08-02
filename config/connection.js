const Sequelize = require('sequelize');

require('dotenv').config();

//if(process.env.JAWSDB_URL){
 // const sequelize = new Sequelize(process.env.JAWSDB_URL);
 
//}else{
  // create connection to our db
// use .env file for credentials
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//   host: 'localhost',
//   dialect: 'mysql',
//   port: 3306
  
// });
const sequelize = new Sequelize('mysql://d4xa9m60m6ezu09z:ft7n8rqzlu855ylh@ckshdphy86qnz0bj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/tzjuljd1cxf2clud')

sequelize.authenticate().then(() => {
  console.log('Connection to database has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to database:', err);
});

// }


module.exports = sequelize;