let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let UserSchema = new Schema({
    firtsName: String,
    lastName: String,
    email: String,
    isActive: Boolean,
    age: Number
});
module.exports = mongoose.model('user', UserSchema,"users");