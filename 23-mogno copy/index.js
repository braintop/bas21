const express = require('express');
const app = express();
app.use(express.json());
const Product = require('./models/Product');
const User = require('./models/User');
const mongoose = require('mongoose');
const userRoute = require('./routing/UserRoutes');
app.use('/users', userRoute);  // כאשר יגיע לשם users יפעיל את הפונקציות שבקובץ UserRoutes.js


const uri = "mongodb+srv://david:Aa123456@cluster0.gqvy99x.mongodb.net/?appName=Cluster0";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await mongoose.disconnect();
  }
}
run().catch(console.dir);

app.post('/products', async (req, res) => {
  try {
    let product = new Product(req.body);
      await product.save();
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});
app.get('/products', async (req, res) => {
  try { 
    let products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/products/:id', async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete('/products/:id', async (req, res) => {
  try {
    let product = await Product.findByIdAndDelete(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put('/products/:id', async (req, res) => {
  try {
    let product = await Product.findByIdAndUpdate(req.params.id, req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//================================post get get by id  delete put================================
app.listen(3001, () => {
    console.log('Server is running on port 3000');
});

