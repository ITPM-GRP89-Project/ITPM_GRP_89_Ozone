const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const waterDeliveryRoutes = require('./routes/waterDeliverys');

//app middleware
app.use(bodyParser.json());

app.use(cors());
//route middleware
app.use(waterDeliveryRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://deliveryService:12345@cluster0.4ixhxdb.mongodb.net/';

mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB connected');

})
.catch((err) => console.log('DB connection error',err));


app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);    
});