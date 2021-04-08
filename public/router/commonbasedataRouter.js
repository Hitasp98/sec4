const express = require('express');
var mysql = require('mysql');
const router = express.Router();
const Pcommonbasedata = require('../controllers/Productcommonbasedata')

router.post('/selecttblcommonbasedata', Pcommonbasedata.ws_loadBaseValue);
router.post('/addUserBasedata', Pcommonbasedata.ws_createBaseValue);
router.post('/UpdateBasedata', Pcommonbasedata.ws_updateBaseValue);
router.post('/DeleteBasedata',Pcommonbasedata.ws_deleteBaseValue);
// router.post('/selectTbSearch',Pcommonbasedata.selectTbSearch)
module.exports = router;
