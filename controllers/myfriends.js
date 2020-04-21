const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const MyFriends = mongoose.model("myfriends");

router.get("/:id", async (req,res)=>{

    try{
        const findMyFriends = await MyFriends.findById(req.params.id).select("_id friendId myfriends");
        if(findMyFriends) res.status(200).json(findMyFriends);
        else res.status(404).json({message:"No record found"});
    }catch(err){
        res.status(500).json({message:err});
    } 
    
});

router.post("/", async(req,res)=>{
    const myriends = new MyFriends({
        _id:  mongoose.Types.ObjectId(),
        friendId: req.body.friendId,
        myfriends: req.body.myfriends
    });
    try{
        const savepost = await myriends.save();
        res.json(savepost);
    }catch(err){
        res.status(500).json({message:err})
    }
    
});



router.get("/", async (req,res)=>{
    try{
        const findMyFriends = await MyFriends.find().select("_id friendId myfriends");
        res.json(findMyFriends);
    }catch(err){
        res.json({message:err});
    }
    
});

// router.patch('/:id', async (req,res)=>{
   
//     try{
//         const updateFriends = await Friends.findOneAndUpdate({_id:req.params.id},{ $set: { username: req.body.username, name: req.body.name, dob: req.body.dob, friends: req.body.friends, hobbies:req.body.hobbies  } }, {new:true},)
//         res.json(updateFriends);
//     }catch(err){
//         res.json(err);
//     }

// });

// router.delete('/:id', async (req,res)=>{
//     // console.log("patch")
//     console.log(req)
//     try{
//         const deleteFriends = await Friends.deleteOne({ _id :req.params.id });
//         res.json(deleteFriends);
//     }catch(err){
//         res.status(500).json({error:err});
//     }

// });



module.exports = router;