const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  socketPath: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
  user: process.env.DB_USER,      // MySQL username
  password: process.env.DB_PASSWORD,  // MySQL password
  database: process.env.DB_NAME // Database name
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }
  console.log('Connected to MySQL');
});

module.exports = db;
