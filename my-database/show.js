const mysql = require('mysql')
const con = require('./config')
const express = require('express');


module.exports= {
  connection: function (callback) {
      var sql = "SELECT * FROM tblcommonbasetype ";
      con.query(sql, function (err, result , fields) {
          if (err) {
              callback("error", err)
          } else {
              callback("success", result)
          }
      });
  }
}
