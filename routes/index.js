const express = require('express');
const path = require('path');
const router = express.Router();
const http = require('http');
const cfg = require('../config');
const fs = require("fs");
const rewrite = require("express-urlrewrite")



router.get('/', function(req, res, next) {
	res.render('index');
});



router.get('*', function(req, res) {
	res.render('404')
});

module.exports = router;