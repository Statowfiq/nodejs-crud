const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Friends = mongoose.model("friends");

router.get("/:id", async (req,res)=>{

    try{
        const findFriends = await Friends.findById(req.params.id).select("_id name username dob friends hobbies");
        if(findFriends) res.status(200).json(findFriends);
        else res.status(404).json({message:"No record found"});
    }catch(err){
        res.status(500).json({message:err});
    }
    
});

router.post("/", async(req,res)=>{
    const friends = new Friends({
        name: req.body.name,
        username: req.body.username,
        dob: req.body.dob,
        friends: req.body.friends,
        hobbies:req.body.hobbies,
    });
    try{
        const savepost = await friends.save();
        res.json(savepost);
    }catch(err){
        res.status(500).json({message:err})
    }
    
});



router.get("/", async (req,res)=>{
    try{
        const findFriends = await Friends.find().select("_id name username dob friends hobbies");
        res.json(findFriends);
    }catch(err){
        res.json({message:err});
    }
    
});

router.patch('/:id', async (req,res)=>{
   
    try{
        const updateFriends = await Friends.findOneAndUpdate({_id:req.params.id},{ $set: { username: req.body.username, name: req.body.name, dob: req.body.dob, friends: req.body.friends, hobbies:req.body.hobbies  } }, {new:true},)
        res.json(updateFriends);
    }catch(err){
        res.json(err);
    }

});

router.delete('/:id', async (req,res)=>{
    // console.log("patch")
    console.log(req)
    try{
        const deleteFriends = await Friends.deleteOne({ _id :req.params.id });
        res.json(deleteFriends);
    }catch(err){
        res.status(500).json({error:err});
    }

});



module.exports = router;