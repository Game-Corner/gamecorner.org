const { Client } = require('pg')
const con = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

con.connect();

function login() {
  con.query('SELECT name FROM users;', (err, res) => {
    return res;
  });
}
  
/*
function register(username, name, email, password) {
  con.query(`INSERT INTO users (name, username, email, password) VALUES (${name}, ${username}, ${email}, crypt(${password}, gen_salt('bf', 8)));`, (err, res) => {
    return err + res;
  });
}

function login(username, email, password) {
  con.query(`SELECT * FROM users WHERE email = lower(${email}) OR username = lower(${username}) AND password = crypt(${password}, password);`, (err, res) => {
    return err + res;
  });
}
*/

con.end();

module.exports = {
  register,
  login
}
