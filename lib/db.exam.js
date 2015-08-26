var mongoose = require('./db');

var exam = mongoose.Schema({
        name: String,
        pwd: String
});

module.exports = exam;