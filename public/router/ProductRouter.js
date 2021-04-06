const express = require('express');
var mysql = require('mysql');
const router = express.Router();
const controller = require('../controllers/ProductController')
//tb tblcommonbasetype
router.post('/selecttblcommonbasetype', controller.selectTbBasetype);
router.post('/addUserBasetype', controller.InsertBasetype);
router.post('/UpdateBasetype', controller.UpdateBasetype);
router.post('/DeleteBasetype',controller.DeleteBasetype);
//tb tblcommonbasedata
router.post('/selecttblcommonbasedata', controller.selectTbBasedata);
router.post('/addUserBasedata', controller.InsertBasedata);
router.post('/UpdateBasedata', controller.UpdateBasedata);
router.post('/DeleteBasedata',controller.DeleteBasedata);
module.exports = router;
