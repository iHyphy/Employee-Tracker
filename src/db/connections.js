const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'correct_username',
  password: 'correct_password',
  database: 'employees_db'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected to database as ID ' + connection.threadId);
});

module.exports = connection;
