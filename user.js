var mongoose= require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
var bcrypt = require('bcryptjs');
//User Schama
var UserSchema= mongoose.Schema({
    username :{
        type :String
    },
    password:{
        type :String
    }
});
UserSchema.plugin(uniqueValidator);
const User = mongoose.model('user',UserSchema);

// User register
module.exports.userRegister =(newUser ,callback) =>{
    bcrypt.genSalt(10 ,function (err ,salt) {
        bcrypt.hash(newUser.password ,salt , function(err ,hash){
            newUser.password =hash;
            User.create(newUser ,callback);
        });
    });
}
//compare password 
module.exports.comparePassword =(password ,hash ,callback)=>{
    bcrypt.compare(password ,hash , function( err ,isMatch){
        // console.log(password);
        // console.log(hash);
        callback(null ,isMatch);
    });
}
//get single user 
module.exports.getSingleUser =(query , callback)=>{
    User.findOne(query , callback);
}