const express = require('express');
var mysql = require('mysql');
const router = express.Router();
const Pcommonbasedata = require('../controllers/Productcommonbasedata')

router.post('/selecttblcommonbasedata', Pcommonbasedata.ws_loadBaseValue);
router.post('/addUserBasedata', Pcommonbasedata.InsertBasedata);
router.post('/UpdateBasedata', Pcommonbasedata.UpdateBasedata);
router.post('/DeleteBasedata',Pcommonbasedata.DeleteBasedata);
router.post('/selectTbSearch',Pcommonbasedata.selectTbSearch)
module.exports = router;
