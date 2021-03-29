var mysql = require('mysql');

var con=require('./config')
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //Todo:create DataBase
//   con.query("CREATE DATABASE Model_Data", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
///////////////////////////////////////
//Todo:create Table
// var sql = "CREATE TABLE tblCommonBaseType (CommonBaseTypeId INT AUTO_INCREMENT PRIMARY KEY NOT NULL, BaseTypeTitle VARCHAR(800) UNIQUE NOT NULL, BaseTypeCode VARCHAR(3) UNIQUE)";
// var sql="CREATE TABLE tblCommonBaseData( CommonBaseDataId INT AUTO_INCREMENT PRIMARY KEY NOT NULL, BaseCode VARCHAR(6) UNIQUE, BaseValue VARCHAR(800), CommonBaseTypeID INT, FOREIGN KEY (CommonBaseTypeID)REFERENCES tblCommonBaseType(CommonBaseTypeId) )"



// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log("Table created");
// });
///////////////////
});