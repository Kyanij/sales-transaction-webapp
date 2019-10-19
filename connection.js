const sql = require('mysql');

// Create a Connection 

const db = sql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "kyanij",
    database : "sales"
});

// Connect
db.connect((err) => {
   if (err) throw err
   console.log("Connected");
   
});

module.exports = db;