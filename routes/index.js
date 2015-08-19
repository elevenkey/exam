var express = require('express');
var router = express.Router();
var config = require('../lib/config');


//var mongoose = require('mongoose');
//mongoose.connect('mongodb://monkey:000000@127.0.0.1/monkeyexam');
//
//var db = mongoose.connection;
//
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function (callback) {
//        console.log('hehe');
//});
//
//var kittySchema = mongoose.Schema({
//        name: String,
//        d: Date
//});
//
//kittySchema.methods.speak = function () {
//        var greeting = this.name
//                ? "Meow name is " + this.name
//                : "I don't have a name";
//        console.log(greeting);
//};
//
//var Kitten = mongoose.model('Hello', kittySchema);
//
//  //var silence = new Kitten({ name: 'Silence' });
//
//var fluffy = new Kitten({
//        name: 'fluffy',
//        d: new Date().getTime().toString()
//});
//
//fluffy.save(function (err, fluffy) {
//        if (err) return console.error(err);
//        fluffy.speak();
//});

//Kitten.find(function (err, kittens) {
//        if (err) return console.error(err);
//        console.log(kittens);
//});



/* GET home page. */
router.get('/', function(req, res, next) {
        console.log(req.connection.remoteAddress);
        res.render('index', {
                title: 'MonkeyEXAM',
                menus: config.mainMenus
        });

});

module.exports = router;
