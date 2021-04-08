"use strict";

var express = require('express');

var mysql = require('mysql');

var router = express.Router();

var Pcommonbasetype = require('../controllers/Productcommonbasetype'); //tb tblcommonbasetype


router.post('/selecttblcommonbasetype', Pcommonbasetype.ws_loadBaseType);
router.post('/addUserBasetype', Pcommonbasetype.ws_CreateBaseType);
router.post('/UpdateBasetype', Pcommonbasetype.ws_UpdateBaseType);
router.post('/DeleteBasetype', Pcommonbasetype.ws_DeleteBaseType);
router.post('/searchTbBasetype', Pcommonbasetype.searchTbBasetype);
router.post('/searchTbBaseTypeTitle', Pcommonbasetype.searchTbBaseTypeTitle); // router.post('/selectTbBasetypeone',Pcommonbasetype.selectTbBasetypeone)
// routeer.post('/searchTbBasetypeIn',Pcommonbasetype.searchTbBasetypeIn)

module.exports = router;