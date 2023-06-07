const mongoose = require('mongoose');

const threatenAnimalSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    province:{
        type:String,
        required:true
   
    },
    species:{
        type:String,
        required:false
    },
    specificName:{
        type:String,    
        required:false
    },

    picture:{
        type:String,    
        required:false
    },
	
	threat:{
        type:String,    
        required:false
    }
   
});


module.exports = mongoose.model('ThreatenAnimal',threatenAnimalSchema);