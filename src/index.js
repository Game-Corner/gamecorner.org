const { Client } = require('pg')
const con = new Client()

con.connect();

con.query('SELECT name FROM users;', (err, res) => {
  console.log(res);
});

con.end();
