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
router.post('/get_doc_msgs', (req, res)=>{
    var d_msg = "SELECT `CommonBaseTypeId`FROM `tblcommonbasetype`";
    var d_msgs = [req.body.doc_id_msgs];
        db.query(d_msg, d_msgs, (err,rows) => {
            if(err){
                console.log('error ', err);
            } else { 
                res.send(rows)
            }
        });
    })
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

app.listen(port,()=>{
    console.log("connect")
});

