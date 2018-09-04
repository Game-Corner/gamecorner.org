const { Client } = require('pg')

const con = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

await client.connect();

con.query(queryString, (err, res) => {
  console.log(res);
  await client.end();
});
