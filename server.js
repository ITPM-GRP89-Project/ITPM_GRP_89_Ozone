const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const cleanUpRoutes = require('./routes/cleanUp');

//app middleware
app.use(bodyParser.json());

app.use(cors());
//route middleware
app.use(cleanUpRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://hiruni:123@cluster0.noou9cf.mongodb.net/';

mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB connected');

})
.catch((err) => console.log('DB connection error',err));


app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);    
});