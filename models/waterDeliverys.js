const mongoose = require('mongoose');

const waterDeliverySchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    contactNo:{
        type:String,
        required:true
   
    },
    city:{
        type:String,
        required:true
    },
    district:{
        type:String,    
        required:true
    },

    address:{
        type:String,    
        required:true
    },

    category:{
        type:String,    
        required:true
    }
   
});

module.exports = mongoose.model('WaterDeliverys',waterDeliverySchema);