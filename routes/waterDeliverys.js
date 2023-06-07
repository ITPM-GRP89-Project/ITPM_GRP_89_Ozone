const express = require('express');
const waterDeliverys = require('../models/waterDeliverys');
const WaterDeliverys = require('../models/waterDeliverys');

const router = express.Router();

//save waterDelivery

router.post('/waterDelivery/save',(req,res)=>{

    let newWaterDelivery= new WaterDeliverys(req.body);

    newWaterDelivery.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });

        }
        return res.status(200).json({
            success:"waterDelivery saved successfully"
        });
    });
});

// get waterDelivery

router.get('/waterDeliverys',(req,res) =>{
    WaterDeliverys.find().exec((err,waterDeliverys) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingWaterDeliverys:waterDeliverys
        });
    });
});

// get a sepecific waterDelivery

router.get("/waterDelivery/:id",(req,res) =>{

    let waterDeliveryId = req.params.id;

    WaterDeliverys.findById(waterDeliveryId,(err,waterDelivery) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            waterDelivery
        });
    });


});

//update waterDelivery

router.put('/waterDelivery/update/:id', (req,res)=>{
    WaterDeliverys.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,waterDelivery)=>{
            if(err){
                return res.status(400).json({error:err});   
            }
            return res.status(200).json({
                success:"updated Successfuly"    
            });
        }
    );
});

//delete waterDelivery

router.delete('/waterDelivery/delete/:id',(req,res) =>{
    WaterDeliverys.findByIdAndRemove(req.params.id).exec((err,deletedWaterDelivery) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });

        return res.json({
            message:"Delete successful",deletedWaterDelivery
        });

    });
});

module.exports = router;