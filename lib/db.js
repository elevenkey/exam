var mongoose = require('mongoose');
mongoose.connect('mongodb://monkey:000000@127.0.0.1/monkeyexam');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
        console.log('链接成功！');
});

module.exports = mongoose;