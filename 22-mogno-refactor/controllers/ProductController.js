let Product = require('../models/Product');
exports.add = async (req, res) => {
    try {
      let product = new Product(req.body);
      await product.save();
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  exports.getAll = async (req, res) => {
    try {
      if(!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      let products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  exports.getById = async (req, res) => {   
    try {
      let product = await Product.findById(req.params.id);
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  exports.deleteById = async (req, res) => {    
    try {
      let product = await Product.findByIdAndDelete(req.params.id);
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  exports.updateById = async (req, res) => {
    try {
      let product = await Product.findByIdAndUpdate(req.params.id, req.body);
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  