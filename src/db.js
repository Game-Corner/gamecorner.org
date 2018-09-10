const { Client } = require('pg')
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

con.connect();

function yay() {
  client.query('SELECT name FROM users;', (err, res) => {
    if (err) {
      return err.stack;
    } else {
      return res.rows[0];
    }
    client.end();
  });
}
  

function register(username, name, email, password) {
  client.query(`INSERT INTO users (name, username, email, password) VALUES (${name}, ${username}, ${email}, crypt(${password}, gen_salt('bf', 8)));`, (err, res) => {
    return res;
    client.end();
  });
}

function login(username, email, password) {
  client.query(`SELECT * FROM users WHERE email = lower(${email}) OR username = lower(${username}) AND password = crypt(${password}, password);`, (err, res) => {
    return res;
    client.end();
  });
}

module.exports = {
  login,
  yay,
  register
}
