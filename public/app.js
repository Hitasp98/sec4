const mysql = require('mysql');
const express = require('express');
const app = express();
const router = app;
const port = 3000;
const bodyParser = require("body-parser");
// Add the credentials to access your database
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'admin', /* replace these with real values. */
    password : 'admin', /* replace these with real values. */
    database : 'model_data' /* replace these with real values. */
});

app.use(bodyParser.json());
app.use(express.static("./"));
router.post('/get_doc_msgs1', (req, res)=>{
var d_msg = "SELECT * FROM `tblcommonbasetype`";
var d_msgs = [req.body.doc_id_msgs];
    db.query(d_msg, d_msgs, (err,rows) => {
        if(err){
            console.log('error ', err);
        } else { 
            res.send(rows)
        }
    });
})

router.post('/addUser',(req, res)=>{
    db.query('INSERT INTO `tblcommonbasetype` (CommonBaseTypeId, BaseTypeTitle) VALUES ("'+req.body.codeone+'","'+req.body.nameone+'")', (err,rows) => {
        if(err){
            console.log('error ', err);
        } else { 
console.log("insert1")        }
    });
    });
    
    // var insert = function (req)
    // {
    //     db.query('INSERT INTO tblcommonbasetyp (CommonBaseTypeId, BaseTypeTitle) VALUES ("'+req.body.codeone+'","'+req.body.nameone+'")');
    // }
        
app.listen(port,()=>{
    console.log("connect")
});

