const db = require('./db');
const express = require('express')
const app = express()
const port = process.env.PORT

app.use(express.static('/pages'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
