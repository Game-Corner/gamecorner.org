/*	
const db = require('./db');	const db = require('./db');
 console.log(db.login());	console.log(db.login());
*/	

const { Client } = require('pg')	
const client = new Client({	
  connectionString: process.env.DATABASE_URL,	
});	

client.connect();	

client.query('INSERT INTO users (username) VALUES (\'yay\');', (err, res) => {	
  if (err) {	
    console.log(err.stack)	
  } else {	
    console.log(res.rows[0])	
  }	
  client.end();	
});	
