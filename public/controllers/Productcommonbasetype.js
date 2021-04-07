const express = require("express");
const bodyParser = require("body-parser");
var mysql = require('mysql');
const app = express();

const db = require('../../my-database/config');
app.use(bodyParser.urlencoded({
  extended: true
}));

exports.selectTbBasetypeone = (req, res) => {
  var d_msg = "SELECT `CommonBaseTypeId`, `BaseTypeTitle`, `BaseTypeCode` FROM `tblcommonbasetype` WHERE 1";
  var d_msgs = [req.body.doc_id_msgs];
  db.query(d_msg, d_msgs, (err, rows) => {
    if (err) {
      console.log("error ", err);
    } else {
      res.send(rows);
    }
  });

};
exports.selectTbBasetype = (req, res) => {
  var d_msg = "SELECT `CommonBaseTypeId`, `BaseTypeTitle`, `BaseTypeCode` FROM `tblcommonbasetype` WHERE "+req.body.CommonBaseTypeId+","+req.body.BaseTypeTitle+","+req.body.BaseTypeCode;
  var d_msgs = [req.body.doc_id_msgs];
  db.query(d_msg, d_msgs, (err, rows) => {
    if (err) {
      console.log("error ", err);
    } else {
      res.send(rows);
    }
  });

};

exports.searchTbBasetype = (req, res) => {

  db.query(
    "SELECT * FROM `tblcommonbasetype` WHERE BaseTypeCode  LIKE " + req.body.BaseTypeCode,
    (err, rows) => {
      if (err) {
        console.log("error ", err);
      } else {
        res.send(rows);
      }
    }
  );
}
exports.searchTbBaseTypeTitle = (req, res) => {

  db.query(
    "SELECT * FROM `tblcommonbasetype` WHERE BaseTypeTitle LIKE  " + req.body.BaseTypeTitle,
    (err, rows) => {
      if (err) {
        console.log("error ", err);
      } else {
        res.send(rows);
      }
    }
  );
}
exports.InsertBasetype = (req, res) => {
  db.query(
    'INSERT INTO `tblcommonbasetype` (CommonBaseTypeId, BaseTypeTitle, BaseTypeCode) VALUES ("' +
    req.body.codeone +
    '","' +
    req.body.nameone +
    '","'
     + req.body.BaseTypeCode + '")',
    (err, rows) => {
      if (err) {
        console.log("error ", err);
      } else {
        console.log("insert");
      }
    }
  )
};
exports.UpdateBasetype = (req, res) => {
  db.query("UPDATE `tblcommonbasetype` SET `BaseTypeTitle`='" + req.body.nameone + "' where `CommonBaseTypeId`=" + req.body.codeone + ""),
    (err, rows) => {
      if (err) {
        console.log("error ", err);
      } else {
        console.log("Update");
      }
    }
}
exports.DeleteBasetype = (req, res) => {
  db.query("DELETE FROM `tblcommonbasetype` WHERE `CommonBaseTypeId`=" + req.body.codeone + ""),
    (err, rows) => {
      if (err) {
        console.log("error ", err);
      } else {
        console.log("Delete");
      }
    }
}
