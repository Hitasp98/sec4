var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "admin",
    database: "Model_Data"
  
  });
module.exports=con;