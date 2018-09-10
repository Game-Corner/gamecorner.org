/*
const db = require('./db');

console.log(db.login());
*/

const { Client } = require('pg')
const con = new Client({
  connectionString: process.env.DATABASE_URL,
});

con.connect();

con.query('INSERT INTO users (username) VALUES (\'yay\');', (err, res) => {
  console.log(res);
  console.log(err);
});

console.log('oof');

con.end();
