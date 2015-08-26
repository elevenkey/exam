var mongoose = require('./db');

var userSchema = mongoose.Schema({
        name: String,
        pwd: String,
        regDate: Date
});

var User = mongoose.model('User', userSchema);


var UsersDAO = function(){
        this.info = 'UsersDAO 0.0.1';
};

UsersDAO.prototype.findByName = function(name, callback) {
        User.findOne({name: name}, function(err, obj){
                callback(err, obj);
        });
};

UsersDAO.prototype.save = function(obj, callback) {
        obj = obj || {};
        obj.regDate = new Date();
        var instance = new User(obj);
        instance.save(function(err, instance){
                callback(err, instance);
        });
};

module.exports = new UsersDAO();