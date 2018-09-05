const { Client } = require('pg')

const con = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

await con.connect();

con.query("SELECT username FROM users;", (err, res) => {
  console.log(res);
  await con.end();
});
