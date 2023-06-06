const express = require('express');
const cleanUp = require('../models/cleanUp');
const CleanUp = require('../models/cleanUp');

const router = express.Router();

//save cleanUp

router.post('/cleanUp/save',(req,res)=>{

    let newCleanUp= new cleanUp(req.body);

    newCleanUp.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });

        }
        return res.status(200).json({
            success:"CleanUp saved successfully"
        });
    });
});

// get cleanUp

router.get('/cleanUp',(req,res) =>{
    CleanUp.find().exec((err,cleanUp) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingCleanUp:cleanUp
        });
    });
});

// get a sepecific cleanUp

router.get("/cleanUpn/:id",(req,res) =>{

    let cleanUpId = req.params.id;

    CleanUp.findById(cleanUpId,(err,cleanUp) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            cleanUp
        });
    });


});

//update cleanUp

router.put('/cleanUp/update/:id', (req,res)=>{
    CleanUp.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,cleanUp)=>{
            if(err){
                return res.status(400).json({error:err});   
            }
            return res.status(200).json({
                success:"updated Successfuly"    
            });
        }
    );
});

//delete cleanUp

router.delete('/cleanUp/delete/:id',(req,res) =>{
    CleanUp.findByIdAndRemove(req.params.id).exec((err,deletedCleanUp) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });

        return res.json({
            message:"Delete successful",deletedCleanUp
        });

    });
});

module.exports = router;