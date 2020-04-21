const mongoose = require("mongoose");
const myfriendsSchema = new mongoose.Schema({
    _id:{ type: mongoose.Schema.Types.ObjectId},
    friendId:{ type: String, required: true, ref:"friends"},
    myfriends:[{
        name:{
            type: String,
            required:true
        }

    }]
});


mongoose.model("myfriends", myfriendsSchema);
