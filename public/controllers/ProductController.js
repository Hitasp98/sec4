const express = require("express");
const bodyParser = require("body-parser");
var mysql = require('mysql');
const app = express();

const db = require('../../my-database/config');
app.use(bodyParser.urlencoded({
    extended: true
}));


exports.selectTbBasetype = (req, res) => { 
    var d_msg = "SELECT * FROM `tblcommonbasetype`";
    var d_msgs = [req.body.doc_id_msgs];
    db.query(d_msg, d_msgs, (err, rows) => {
      if (err) {
        console.log("error ", err);
      } else {
        res.send(rows);
      }
    });

};


exports.InsertBasetype=  (req, res) => {
     db.query(
    'INSERT INTO `tblcommonbasetype` (CommonBaseTypeId, BaseTypeTitle) VALUES ("' +
    req.body.codeone +
    '","' +
    req.body.nameone +
    '")',
    (err, rows) => {
      if (err) {
        console.log("error ", err);
      } else {
        console.log("insert");
      }
    }
)};
exports.UpdateBasetype=(req,res)=>{
    db.query("UPDATE `tblcommonbasetype` SET `BaseTypeTitle`='" + req.body.nameone + "' where `CommonBaseTypeId`=" + req.body.codeone + ""),
    (err, rows) => {
      if (err) {
        console.log("error ", err);
      } else {
        console.log("Update");
      }
    }
}
exports.DeleteBasetype=(req,res)=>{
    db.query("DELETE FROM `tblcommonbasetype` WHERE `CommonBaseTypeId`=" + req.body.codeone + ""),
    (err, rows) => {
      if (err) {
        console.log("error ", err);
      } else {
        console.log("Delete");
      }
    }
}
exports.selectTbBasedata = (req, res) => { 
    var d_msg = "SELECT * FROM `tblcommonbasedata`";
    var d_msgs = [req.body.doc_id_msgs];
    db.query(d_msg, d_msgs, (err, rows) => {
      if (err) {
        console.log("error ", err);
      } else {
        res.send(rows);
      }
    });

};

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