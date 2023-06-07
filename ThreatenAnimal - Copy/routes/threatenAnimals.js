const express = require('express');
const threatenAnimals = require('../models/threatenAnimals');
const ThreatenAnimals = require('../models/threatenAnimals');

const router = express.Router();

//save threatenAnimals

router.post('/threatenAnimal/save',(req,res)=>{

    let newThreatenAnimal= new ThreatenAnimals(req.body);

    newThreatenAnimal.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });

        }
        return res.status(200).json({
            success:"ThreatenAnimals saved successfully"
        });
    });
});

// get threatenAnimals

router.get('/threatenAnimals',(req,res) =>{
    ThreatenAnimals.find().exec((err,threatenAnimals) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingThreatenAnimals:threatenAnimals
        });
    });
});

// get a sepecific ThreatenAnimals

router.get("/threatenAnimal/:id",(req,res) =>{

    let threatenAnimalId = req.params.id;

    ThreatenAnimals.findById(threatenAnimalId,(err,threatenAnimal) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            threatenAnimal
        });
    });


});

//update threatenAnimals

router.put('/threatenAnimal/update/:id', (req,res)=>{
    ThreatenAnimals.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,threatenAnimal)=>{
            if(err){
                return res.status(400).json({error:err});   
            }
            return res.status(200).json({
                success:"updated Successfuly"    
            });
        }
    );
});

//delete threatenAnimals

router.delete('/threatenAnimal/delete/:id',(req,res) =>{
    ThreatenAnimals.findByIdAndRemove(req.params.id).exec((err,deletedThreatenAnimal) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });

        return res.json({
            message:"Delete successful",deletedThreatenAnimal
        });

    });
});

module.exports = router;