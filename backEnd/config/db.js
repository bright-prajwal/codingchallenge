// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
// });

// connection.connect(err => {
//   if (err) throw err;
//   console.log('MySQL connected');
// });

// module.exports = connection;

require('dotenv').config();
const mysql = require('mysql2');
console.log('ENV:', process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_NAME);

// require('dotenv').config();
// console.log('DB_USER:', process.env.DB_USER); 
// console.log('DB_PASS:', process.env.DB_PASS); 
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // host:'localhost',
  // user:'root',
  // database:'full_stack_store_rating_app',
  // password:'Prajwal9075@#'
});

connection.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('MySQL connected as id ' + connection.threadId);
});

module.exports = connection;
