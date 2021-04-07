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
app.use(express.json());
const db = require('../my-database/config')
app.use(bodyParser.json());
app.use(express.static("./html/"));
app.use(express.urlencoded({ extended: true }));
const commonbasedataRouter=require('./router/commonbasedataRouter')
app.use('/productcommonbasedata',commonbasedataRouter)
const commonbasetypeRouter=require('./router/commonbasetypeRouter')
app.use('/productcommonbasetype',commonbasetypeRouter)
require('./initDB')();






app.get('/*', (req, res) => {
  res.render('404')})

app.listen(port, () => {
  console.log("connect");
});






