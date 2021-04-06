const express = require('express');
var mysql = require('mysql');
const router = express.Router();
const Pcommonbasetype = require('../controllers/Productcommonbasetype')


//tb tblcommonbasetype
router.post('/selecttblcommonbasetype', Pcommonbasetype.selectTbBasetype);
router.post('/addUserBasetype', Pcommonbasetype.InsertBasetype);
router.post('/UpdateBasetype', Pcommonbasetype.UpdateBasetype);
router.post('/DeleteBasetype',Pcommonbasetype.DeleteBasetype);
router.post('/searchBasetype',Pcommonbasetype.searchTbBasetype);
// routeer.post('/searchTbBasetypeIn',Pcommonbasetype.searchTbBasetypeIn)

module.exports = router;
