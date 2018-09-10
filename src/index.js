/*
const db = require('./db');

console.log(db.login());
*/

const { Client } = require('pg')
const con = new Client({
  connectionString: process.env.DATABASE_URL,
});

con.connect();

con.query('SELECT * FROM users;', (err, res) => {
  console.log(res);
});

con.end();
