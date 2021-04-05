const path = require("path");
const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("hbs");

const db = require("../my-database/config");

const app = express();
const router = app;
const port = 3000;

const viewPath = path.join(__dirname, "./html");
const partialsPath = path.join(__dirname, "./html");

app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath);

app.use(bodyParser.json());
app.use(express.static("./html/"));
//select tblcharityaccounts
router.post("/tblcharityaccounts", (req, res) => {
  try {
    var d_msg = "SELECT * FROM `tblPersonal`";
    var d_msgs = [req.body.doc_id_msgs];
    db.query(d_msg, d_msgs, (err, rows) => {
      if (err) {
        console.log("error ", err);
      } else {
        res.send(rows);
      }
    });
  } catch (err) {
    console.log("not");
  }
});
router.post("/addUser", (req, res) => {
  db.query(
    'INSERT INTO `tblpersonal`(`PersonId`, `NAME`, `Family`, `NationalCode`, `IdNumber`, `sex`, `BirthDate`, `BirthPlace`, `PersonType`, `PersonPhoto`, `SecretCode`) VALUES ("' +
      req.body.PersonId +
      '","' +
      +req.body.Name +
      '","' +
      req.body.Family +
      '","' +
      req.body.NationalCode +
      '","' +
      req.body.IdNumber +
      '","' +
      req.body.checked +
      '","' +
      req.body.BirthDate +
      '","' +
      req.body.BirthPlace +
      '","' +
      req.body.PersonType +
      '","' +
      req.body.PersonPhoto +
      '","' +
      req.body.SecretCode +
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
  db.query(
    "UPDATE `tblcharityaccounts` SET `CharityAccountId`=" +
      req.body.charityAccountId +
      " WHERE 1 `BankId`=" +
      req.body.bankId +
      ",`BranchName`=" +
      req.body.nameBank +
      ",`OwnerName`=" +
      req.body.nameAccount +
      ",`CardNumber`=" +
      req.body.numberCart +
      ",`AccountNumber`=" +
      req.body.numberAccount +
      ",`AccountName`=" +
      req.body.nameNumberAccount +
      ""
  ), (err, rows) => {
    if (err) {
      console.log("error ", err);
    } else {
      console.log("Update");
    }
  };
});

router.post("/DeleteUser", (req, res) => {
  // DELETE FROM `tblcommonbasetype` WHERE `tblcommonbasetype`.`CommonBaseTypeId` = 14"?
  db.query(
    "DELETE FROM `tblcharityaccounts` WHERE  `CharityAccountId`=" +
      req.body.charityAccountId +
      ""
  ), (err, rows) => {
    if (err) {
      console.log("error ", err);
    } else {
      console.log("Delete");
    }
  };
});

router.post("/search", function(req, res) {
  //POST method to access DB and return results in JSON
  // db.query('SELECT AccountName from `tblcharityaccounts` where CharityAccountId  like ' + req.params.inputSearch ,(err, rows)=>{

  db.query(
    "SELECT * FROM `tblPersonal` WHERE PersonId  LIKE " + req.body.inputSearch,
    (err, rows) => {
      if (err) {
        console.log("error ", err);
      } else {
        res.send(rows);
      }
    }
  );
});
router.get("*", (req, res) => {
  res.render("404");
});

router.listen(port, () => {
  console.log("connect");
});
