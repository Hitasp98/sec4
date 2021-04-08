"use strict";

var express = require("express");

var bodyParser = require("body-parser");

var mysql = require('mysql');

var app = express();

var db = require('../../my-database/config');

app.use(bodyParser.urlencoded({
  extended: true
}));

exports.ws_loadBaseValue = function (req, res) {
  if (req.body.CommonBaseDataId === 1 && req.body.BaseCode === 1 && req.body.BaseValue === 1) {
    var d_msg = "SELECT `CommonBaseDataId`, `BaseCode`, `BaseValue`, `CommonBaseTypeID` FROM `tblcommonbasedata` WHERE 1";
    var d_msgs = [req.body.doc_id_msgs];
    db.query(d_msg, d_msgs, function (err, rows) {
      if (err) {
        console.log("error ", err);
      } else {
        res.send(rows);
      }
    });
  } else if (req.body.CommonBaseDataId !== 1 && req.body.BaseCode === 1 && req.body.BaseValue === 1 && req.body.CommonBaseTypeID === 1) {
    var d_msg = "SELECT * FROM `tblcommonbasedata` WHERE CommonBaseDataId=" + req.body.CommonBaseDataId;
    var d_msgs = [req.body.doc_id_msgs];
    db.query(d_msg, d_msgs, function (err, rows) {
      if (err) {
        console.log("error ", err);
      } else {
        res.send(rows);
      }
    });
  } else if (req.body.CommonBaseDataId === 1 && req.body.BaseCode !== 1 && req.body.BaseValue === 1 && req.body.CommonBaseTypeID === 1) {
    var d_msg = "SELECT * FROM `tblcommonbasedata` WHERE BaseCode=" + req.body.BaseCode;
    var d_msgs = [req.body.doc_id_msgs];
    db.query(d_msg, d_msgs, function (err, rows) {
      if (err) {
        console.log("error ", err);
      } else {
        res.send(rows);
      }
    });
  } else if (req.body.CommonBaseDataId === 1 && req.body.BaseCode === 1 && req.body.BaseValue !== 1 && req.body.CommonBaseTypeID === 1) {
    var d_msg = "SELECT * FROM `tblcommonbasedata` WHERE BaseValue=" + req.body.BaseValue;
    var d_msgs = [req.body.doc_id_msgs];
    db.query(d_msg, d_msgs, function (err, rows) {
      if (err) {
        console.log("error ", err);
      } else {
        res.send(rows);
      }
    });
  } else if (req.body.CommonBaseDataId === 1 && req.body.BaseCode === 1 && req.body.BaseValue === 1 && req.body.CommonBaseTypeID !== 1) {
    var d_msg = "SELECT * FROM `tblcommonbasedata` WHERE CommonBaseTypeID=" + req.body.CommonBaseTypeID;
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

exports.selectTbSearch = function (req, res) {
  db.query("SELECT * FROM `tblcommonbasedata` WHERE " + req.body.filter + "  LIKE " + req.body.value, function (err, rows) {
    if (err) {
      console.log("error ", err);
    } else {
      res.send(rows);
    }
  });
};

exports.InsertBasedata = function (req, res) {
  db.query('INSERT INTO `tblcommonbasedata` (BaseCode   , BaseValue, CommonBaseDataId ) VALUES ("' + req.body.codeone + '","' + req.body.nameone + '","' + req.body.idrandom + '")', function (err, rows) {
    if (err) {
      console.log("error ", err);
    } else {
      console.log("insert");
    }
  });
};

exports.UpdateBasedata = function (req, res) {
  db.query("UPDATE `tblcommonbasedata` SET `BaseValue`='" + req.body.nameone + "' where `BaseCode`=" + req.body.codeone + ""), function (err, rows) {
    if (err) {
      console.log("error ", err);
    } else {
      console.log("Update");
    }
  };
};

exports.DeleteBasedata = function (req, res) {
  db.query("DELETE FROM `tblcommonbasedata` WHERE `BaseCode`=" + req.body.codeone + ""), function (err, rows) {
    if (err) {
      console.log("error ", err);
    } else {
      console.log("Delete");
    }
  };
};