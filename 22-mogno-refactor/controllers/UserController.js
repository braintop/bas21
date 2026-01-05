const User = require('../models/User');
var bcrypt = require('bcryptjs');//npm i bcryptjs
exports.add = async (req, res) => {
    try {
      let user = new User(req.body);
      console.log(user);
      if(req.body.password){
      let salt = bcrypt.genSaltSync(12);
      user.password = bcrypt.hashSync(req.body.password, salt);
    }
      
      await user.save();
      res.json({"message": "User added successfully"});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  exports.getAll= async (req, res) => {
    try {
      let users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  exports.getById = async (req, res) => {   
    try {
      let user = await User.findById(req.params.id);
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  exports.deleteById = async (req, res) => {    
    try {
      let user = await User.findByIdAndDelete(req.params.id);
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  exports.updateById = async (req, res) => {
    try {
      let user = await User.findByIdAndUpdate(req.params.id, req.body);
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  exports.login = async (req, res) => {
    try{
      let user=await User.findOne({email:req.body.email})
      let anser=bcrypt.compareSync(req.body.password, user.password);
      if(anser){
        res.json({message:'Login success'})
      }
      else {
        res.json({message:'Login not  success'})
      }
    }
    catch(error){
      res.json({message:error.message})
    }
  }


