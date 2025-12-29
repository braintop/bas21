let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let ProductSchema = new Schema({
    title: String,
    Description: String,
    price: Number
});
module.exports = mongoose.model('product', ProductSchema,"products");