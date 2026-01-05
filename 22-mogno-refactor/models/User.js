let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: [true, 'please provide email'],
        required: true,
        lowercase: true
    },
    password:String,
    isActive: Boolean,
    age: Number
});
module.exports = mongoose.model('user', UserSchema, "users");