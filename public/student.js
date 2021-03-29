const mysql = require('mysql');

var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'admin', /* replace these with real values. */
    password : 'admin', /* replace these with real values. */
    database : 'model_data' /* replace these with real values. */
});
app.post('/', function (req, res) {
    // this is where you handle the POST request.
    var createStudent = {
        CommonBaseTypeId: req.body.codeone,
        BaseTypeTitle : req.body.nameone,
    
     }
     // now the createStudent is an object you can use in your database insert logic.
     connection.query('INSERT INTO studentinfo SET ?', createStudent, function (err, resp) {
       if (err) throw err;
       // if there are no errors send an OK message.
       res.send('Saved succesfully');
     });
   });