var express = require('express');
var router = express.Router();
var User = require('../controller/user');
//import controller
// const User = require('../controller/user');

router.post('/register',User.register);
router.post('/login',User.login);
router.post('/uploadFile',User.uploadFile);
router.post('/deleteFile',User.deleteFile);

module.exports=router;


