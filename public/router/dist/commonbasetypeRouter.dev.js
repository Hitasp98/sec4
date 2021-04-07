"use strict";

var express = require('express');

var mysql = require('mysql');

var router = express.Router();

var Pcommonbasetype = require('../controllers/Productcommonbasetype'); //tb tblcommonbasetype


router.post('/selecttblcommonbasetype', Pcommonbasetype.selectTbBasetype);
router.post('/addUserBasetype', Pcommonbasetype.InsertBasetype);
router.post('/UpdateBasetype', Pcommonbasetype.UpdateBasetype);
router.post('/DeleteBasetype', Pcommonbasetype.DeleteBasetype);
router.post('/searchTbBasetype', Pcommonbasetype.searchTbBasetype);
router.post('/searchTbBaseTypeTitle', Pcommonbasetype.searchTbBaseTypeTitle);
router.post('/selectTbBasetypeone', Pcommonbasetype.selectTbBasetypeone); // routeer.post('/searchTbBasetypeIn',Pcommonbasetype.searchTbBasetypeIn)

module.exports = router;