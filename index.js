const { Client } = require('pg')

const con = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

con.connect();

con.query("SELECT username FROM users;", (err, res) => {
  console.log(res);
  con.end();
});
