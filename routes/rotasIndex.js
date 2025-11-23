var express = require('express');
var router = express.Router();
var controllerIndex = require('../controller/controllerIndex');

/* GET home page. */
router.get('/', controllerIndex.index);

/* GET about page. */
router.get('/sobre', controllerIndex.sobre);

module.exports = router;
