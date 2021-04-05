const path = require('path')
const mysql = require("mysql");
const express = require("express");
var fs = require('fs');
const hbs = require('hbs')

const app = express();
const router = app;
const port = 3000;
const bodyParser = require("body-parser");
////

// Add the credentials to access your database
const viewsPath = path.join(__dirname, './html')
const partialsPath = path.join(__dirname, './html')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

const db = require('../my-database/config')
app.use(bodyParser.json());
app.use(express.static("./html/"));

//select tblcommonbasetype
router.post("/selecttblcommonbasetype", (req, res) => {
  var d_msg = "SELECT * FROM `tblcommonbasetype`";
  var d_msgs = [req.body.doc_id_msgs];
  db.query(d_msg, d_msgs, (err, rows) => {
    if (err) {
      console.log("error ", err);
    } else {
      res.send(rows);
    }
  });
});
// select db 
router.post("/selecttblcommonbasedata", (req, res) => {
  var d_msg = "SELECT * FROM `tblcommonbasedata`";
  var d_msgs = [req.body.doc_id_msgs];
  db.query(d_msg, d_msgs, (err, rows) => {
    if (err) {
      console.log("error ", err);
    } else {
      res.send(rows);
    }
  });
});
router.post("/addUser", (req, res) => {
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
  );
});
router.post("/EditUser", (req, res) => {
  // "UPDATE users SET name='"+req.body.nameone+"' where id='"+req.body.codeone+"'"
  db.query("UPDATE `tblcommonbasetype` SET `BaseTypeTitle`='" + req.body.nameone + "' where `CommonBaseTypeId`=" + req.body.codeone + ""),
    (err, rows) => {
      if (err) {
        console.log("error ", err);
      } else {
        console.log("Update");
      }
    }
});

router.post("/DeleteUser", (req, res) => {
  // DELETE FROM `tblcommonbasetype` WHERE `tblcommonbasetype`.`CommonBaseTypeId` = 14"?
  db.query("DELETE FROM `tblcommonbasetype` WHERE `CommonBaseTypeId`=" + req.body.codeone + ""),
    (err, rows) => {
      if (err) {
        console.log("error ", err);
      } else {
        console.log("Delete");
      }
    }
});




//select db 	tblcommonbasedata
router.post("/selecttblcommonbasetype", (req, res) => {
  var d_msg = "SELECT * FROM `tblcommonbasetype`";
  var d_msgs = [req.body.doc_id_msgs];
  db.query(d_msg, d_msgs, (err, rows) => {
    if (err) {
      console.log("error ", err);
    } else {
      res.send(rows);
    }
  });
});
router.post("/addUserTwo", (req, res) => {
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
  );
});
router.post("/EditUserTwo", (req, res) => {
  // "UPDATE users SET name='"+req.body.nameone+"' where id='"+req.body.codeone+"'"
  db.query("UPDATE `tblcommonbasedata` SET `BaseValue`='" + req.body.nameone + "' where `BaseCode`=" + req.body.codeone + ""),
    (err, rows) => {
      if (err) {
        console.log("error ", err);
      } else {
        console.log("Update");
      }
    }
});

router.post("/DeleteUserTwo", (req, res) => {
  // DELETE FROM `tblcommonbasetype` WHERE `tblcommonbasetype`.`CommonBaseTypeId` = 14"?
  db.query("DELETE FROM `tblcommonbasedata` WHERE `BaseCode`=" + req.body.codeone + ""),
    (err, rows) => {
      if (err) {
        console.log("error ", err);
      } else {
        console.log("Delete");
      }
    }
});
app.get('/*', (req, res) => {
  res.render('404')})

app.listen(port, () => {
  console.log("connect");
});
