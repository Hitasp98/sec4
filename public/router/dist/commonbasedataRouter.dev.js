"use strict";

var express = require('express');

var mysql = require('mysql');

var router = express.Router();

var Pcommonbasedata = require('../controllers/Productcommonbasedata');

router.post('/selecttblcommonbasedata', Pcommonbasedata.ws_loadBaseValue);
router.post('/addUserBasedata', Pcommonbasedata.InsertBasedata);
router.post('/UpdateBasedata', Pcommonbasedata.UpdateBasedata);
router.post('/DeleteBasedata', Pcommonbasedata.DeleteBasedata);
router.post('/selectTbSearch', Pcommonbasedata.selectTbSearch);
module.exports = router;