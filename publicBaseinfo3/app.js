const path = require('path')
const mysql = require("mysql");
const express = require("express");
const bodyParser = require('body-parser')
const hbs = require('hbs')

const db = require('../my-database/config')


const app = express()
const router = app
const port = 3000

const viewPath = path.join(__dirname, './html')
const partialsPath = path.join(__dirname, './html')

app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)



app.use(bodyParser.json())
app.use(express.static("./html/"))
//select tblcharityaccounts
router.post("/tblcharityaccounts", (req, res) => {
    var d_msg = "SELECT * FROM `tblcharityaccounts`";
    var d_msgs = [req.body.doc_id_msgs];
    db.query(d_msg, d_msgs, (err, rows) => {
        if (err) {
            console.log("error ", err);
        } else {
            res.send(rows);
        }
    });
});
//add user
router.post("/addUser", (req, res) => {
    db.query('INSERT INTO `tblcharityaccounts` (`CharityAccountId`, `BankId`, `BranchName`, `OwnerName`, `CardNumber`, `AccountNumber`, `AccountName`) VALUES("' +
        req.body.charityAccountId +
        '","' +
        +req.body.bankId +
        '","' +
        req.body.nameBank +
        '","' +
        req.body.nameAccount +
        '","' +
        req.body.numberCart +
        '","' +
        req.body.numberAccount +
        '","' +
        req.body.nameNumberAccount +
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
//edit
router.post("/EditUser", (req, res) => {
    // "UPDATE users SET name='"+req.body.nameone+"' where id='"+req.body.codeone+"'"
    db.query("UPDATE `tblcharityaccounts` SET `BankId`=" +
    req.body.bankId  +
        " WHERE 1 `BranchName`=" +
        req.body.nameBank +
        ",`OwnerName`=" +
        req.body.nameAccount +
        ",`CardNumber`=" +
        req.body.numberCart +
        ",`AccountNumber`=" +
        req.body.numberAccount +
        ",`AccountName`=" +
        req.body.nameNumberAccount +
        ""),
        (err, rows) => {
            if (err) {
                console.log("error ", err);
            } else {
                console.log("Update");
            }
        }
});
//delete
router.post("/DeleteUser", (req, res) => {
    // DELETE FROM `tblcommonbasetype` WHERE `tblcommonbasetype`.`CommonBaseTypeId` = 14"?
    db.query("DELETE FROM `tblcharityaccounts` WHERE  `CharityAccountId`=" +
        req.body.charityAccountId + ""),
        (err, rows) => {
            if (err) {
                console.log("error ", err);
            } else {
                console.log("Delete");
            }
        }
});


router.get('*', (req, res) => {
    res.render('404')
})


router.listen(port, () => {
    console.log('connect')
})