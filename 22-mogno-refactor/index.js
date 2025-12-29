const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const userRoute = require('./routing/UserRoutes');
const productRoute = require('./routing/ProductRoutes');
app.use('/users', userRoute);  // כאשר יגיע לשם users יפעיל את הפונקציות שבקובץ UserRoutes.js
app.use('/products', productRoute);  // כאשר יגיע לשם products יפעיל את הפונקציות שבקובץ ProductRoutes.js


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

app.listen(3001, () => {
    console.log('Server is running on port 3000');
});

