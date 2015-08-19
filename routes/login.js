var express = require('express');
var router = express.Router();
var config = require('../lib/config');



/* GET home page. */
router.get('/', function(req, res, next) {
        console.log(req.connection.remoteAddress);
        res.render('login', {
                title: 'login',
                menus: config.mainMenus
        });

});

module.exports = router;
