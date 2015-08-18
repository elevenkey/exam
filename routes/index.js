var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
        res.render('index', {
                title: 'MonkeyEXAM',
                jobs:['aaa', 'bbbb', 'ccccc']
        });
});

module.exports = router;
