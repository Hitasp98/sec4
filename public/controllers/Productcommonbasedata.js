const express = require("express");
const bodyParser = require("body-parser");
var mysql = require('mysql');
const app = express();

const db = require('../../my-database/config');
app.use(bodyParser.urlencoded({
    extended: true
}));
exports.selectTbBasedata = (req, res) => { 
    var d_msg = "SELECT `CommonBaseDataId`, `BaseCode`, `BaseValue`, `CommonBaseTypeID` FROM `tblcommonbasedata` WHERE 1";
    var d_msgs = [req.body.doc_id_msgs];
    db.query(d_msg, d_msgs, (err, rows) => {
      if (err) {
        console.log("error ", err);
      } else {
        res.send(rows);
      }
    });

};
exports.selectTbSearch=(req,res)=>{
  db.query(
    "SELECT * FROM `tblcommonbasedata` WHERE "+req.body.filter+"  LIKE " + req.body.value,
    (err, rows) => {
      if (err) {
        console.log("error ", err);
      } else {
        res.send(rows);
      }
    }
  );
}
exports.InsertBasedata=  (req, res) => {
    db.query(
        'INSERT INTO `tblcommonbasedata` (BaseCode   , BaseValue, CommonBaseDataId ) VALUES ("' +
        req.body.codeone +
        '","' +
        req.body.nameone +
        '","' + req.body.idrandom + '")',
        (err, rows) => {
          if (err) {
            console.log("error ", err);
          } else {
            console.log("insert");
          }
        }
      );};
exports.UpdateBasedata=(req,res)=>{
    db.query("UPDATE `tblcommonbasedata` SET `BaseValue`='" + req.body.nameone + "' where `BaseCode`=" + req.body.codeone + ""),
    (err, rows) => {
      if (err) {
        console.log("error ", err);
      } else {
        console.log("Update");
      }
    }
}
exports.DeleteBasedata=(req,res)=>{
    db.query("DELETE FROM `tblcommonbasedata` WHERE `BaseCode`=" + req.body.codeone + ""),
    (err, rows) => {
      if (err) {
        console.log("error ", err);
      } else {
        console.log("Delete");
      }
    }   
}