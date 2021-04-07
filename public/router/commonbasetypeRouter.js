const express = require('express');
var mysql = require('mysql');
const router = express.Router();
const Pcommonbasetype = require('../controllers/Productcommonbasetype')


//tb tblcommonbasetype
router.post('/selecttblcommonbasetype', Pcommonbasetype.selectTbBasetype);
router.post('/addUserBasetype', Pcommonbasetype.ws_CreateBaseType);
router.post('/UpdateBasetype', Pcommonbasetype.ws_UpdateBaseType);
router.post('/DeleteBasetype',Pcommonbasetype.ws_DeleteBaseType);
router.post('/searchTbBasetype',Pcommonbasetype.searchTbBasetype);
router.post('/searchTbBaseTypeTitle',Pcommonbasetype.searchTbBaseTypeTitle)
router.post('/selectTbBasetypeone',Pcommonbasetype.selectTbBasetypeone)
// routeer.post('/searchTbBasetypeIn',Pcommonbasetype.searchTbBasetypeIn)

module.exports = router;
