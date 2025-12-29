let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let UserSchema = new Schema({
    firtsName: String,
    lastName: String,
    email: String,
    isActivr: Boolean,
    age: Number
});
module.exports = mongoose.model('user', UserSchema,"users");