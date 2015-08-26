var express = require('express');
var router = express.Router();
//var config = require('../lib/config');

var user = require('../lib/db.user');
var exam = require('../lib/db.exam');


router.get('/', function(req, res, next) {
        res.send('api');
});

router.get('/list', function(req, res, next) {
        res.json({
                a:'list',
                b:'哈哈哈'
        })
});

// 登录
router.post('/login', function(req, res, next) {
        res.json({
                a:'list',
                b:'哈哈哈'
        })
});


// 注册
router.post('/reg', function(req, res, next) {

        var name = req.body.email,
            pwd = req.body.password;

        user.findByName(name, function(err, obj){

                if(err !== null){
                        res.json({
                                bak: 'error',
                                msg: 'system error'
                        })
                }

                if(obj === null){
                        user.save(
                        {
                                name: name,
                                pwd: pwd
                        },
                        function(err, obj){
                                if(err !== null){
                                        res.json({
                                                bak: 'error',
                                                msg: 'system error'
                                        })
                                }
                                res.json({
                                        bak: 'ok',
                                        uid: obj._id,
                                        reg: obj.regDate.toString()
                                })
                        });
                }else{
                        res.json({
                                bak: 'error',
                                msg: "用户已存在",
                                reg: obj.regDate.getTime().toString()
                        })
                }
        });


});

module.exports = router;
