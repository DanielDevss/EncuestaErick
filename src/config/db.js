require('dotenv').config()
const mysql = require('mysql2')

const db = mysql.createConnection({
    host            :   process.env.DB_HOST,
    user            :   process.env.DB_USER,
    password        :   process.env.DB_PASS,
    database        :   process.env.DB_NAME,
    connectionLimit :   0, 
    queueLimit      :   0,
    acquireTimeout  :   0
})

db.connect((err)=> {
    if(err) throw err
    console.log('database on')
})

module.exports = db