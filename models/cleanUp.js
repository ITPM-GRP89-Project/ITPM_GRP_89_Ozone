const mongoose = require('mongoose');

const cleanUpSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    contactNo:{
        type:String,
        required:true
   
    },
    address:{
        type:String,
        required:true
    },
    province:{
        type:String,    
        required:true
    },

    image:{
        type:String,    
        required:true
    }

});

module.exports = mongoose.model('CleanUp',cleanUpSchema);