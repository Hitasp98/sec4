"use strict";

var express = require("express");

var bodyParser = require("body-parser");

var mysql = require('mysql');

var app = express();

var db = require('../../my-database/config');

app.use(bodyParser.urlencoded({
  extended: true
}));

exports.ws_loadBaseType = function (req, res) {
  if (req.body.CommonBaseTypeId === 1 && req.body.BaseTypeCode === 1 && req.body.BaseTypeTitle) {
    var d_msg = "SELECT `CommonBaseTypeId`, `BaseTypeTitle`, `BaseTypeCode` FROM `tblcommonbasetype` WHERE 1";
    var d_msgs = [req.body.doc_id_msgs];
    db.query(d_msg, d_msgs, function (err, rows) {
      if (err) {
        console.log("error ", err);
      } else {
        res.send(rows);
      }
    });
  } else if (req.body.CommonBaseTypeId !== 1 && req.body.BaseTypeCode === 1 && req.body.BaseTypeTitle === 1) {
    var d_msg = "SELECT * FROM `tblcommonbasetype` WHERE CommonBaseTypeId=" + req.body.CommonBaseTypeId;
    var d_msgs = [req.body.doc_id_msgs];
    db.query(d_msg, d_msgs, function (err, rows) {
      if (err) {
        console.log("error ", err);
      } else {
        res.send(rows);
      }
    });
  } else if (req.body.CommonBaseTypeId === 1 && req.body.BaseTypeCode !== 1 && req.body.BaseTypeTitle === 1) {
    var d_msg = "SELECT * FROM `tblcommonbasetype` WHERE BaseTypeCode=" + req.body.BaseTypeCode;
    var d_msgs = [req.body.doc_id_msgs];
    db.query(d_msg, d_msgs, function (err, rows) {
      if (err) {
        console.log("error ", err);
      } else {
        res.send(rows);
      }
    });
  } else if (req.body.CommonBaseTypeId === 1 && req.body.BaseTypeCode === 1 && req.body.BaseTypeTitle !== 1) {
    var d_msg = "SELECT * FROM `tblcommonbasetype` WHERE BaseTypeTitle=" + req.body.BaseTypeTitle;
    var d_msgs = [req.body.doc_id_msgs];
    db.query(d_msg, d_msgs, function (err, rows) {
      if (err) {
        console.log("error ", err);
      } else {
        res.send(rows);
      }
    });
  }
};

exports.ws_CreateBaseType = function (req, res) {
  db.query('INSERT INTO `tblcommonbasetype` (CommonBaseTypeId, BaseTypeTitle, BaseTypeCode) VALUES ("' + req.body.CommonBaseTypeId + '","' + req.body.BaseTypeTitle + '","' + req.body.BaseTypeCode + '")', function (err, rows) {
    if (err) {
      res.send("was insert ");
      console.log('error', err);
    } else {
      console.log("insert");
    }
  });
};

exports.ws_UpdateBaseType = function (req, res) {
  db.query("UPDATE `tblcommonbasetype` SET `BaseTypeTitle`='" + req.body.BaseTypeTitle + "' WHERE  `BaseTypeCode`=" + req.body.BaseTypeCode), function (err, rows) {
    if (err) {
      console.log("error ", err);
    } else {
      console.log("Update");
    }
  };
};

exports.ws_DeleteBaseType = function (req, res) {
  db.query("DELETE FROM `tblcommonbasetype` WHERE `CommonBaseTypeId`=" + req.body.CommonBaseTypeId + ""), function (err, rows) {
    if (err) {
      console.log("error ", err);
    } else {
      console.log("Delete");
    }
  };
}; // exports.selectTbBasetype = (req, res) => {
//   var d_msg = "SELECT `CommonBaseTypeId`, `BaseTypeTitle`, `BaseTypeCode` FROM `tblcommonbasetype` WHERE " + req.body.CommonBaseTypeId + "," + req.body.BaseTypeTitle + "," + req.body.BaseTypeCode;
//   var d_msgs = [req.body.doc_id_msgs];
//   db.query(d_msg, d_msgs, (err, rows) => {
//     if (err) {
//       console.log("error ", err);
//     } else {
//       res.send(rows);
//     }
//   });
// };


exports.searchTbBasetype = function (req, res) {
  db.query("SELECT * FROM `tblcommonbasetype` WHERE BaseTypeCode  LIKE " + req.body.BaseTypeCode, function (err, rows) {
    if (err) {
      console.log("error ", err);
    } else {
      res.send(rows);
    }
  });
};

exports.searchTbBaseTypeTitle = function (req, res) {
  db.query("SELECT * FROM `tblcommonbasetype` WHERE BaseTypeTitle LIKE  " + req.body.BaseTypeTitle, function (err, rows) {
    if (err) {
      console.log("error ", err);
    } else {
      res.send(rows);
    }
  });
};