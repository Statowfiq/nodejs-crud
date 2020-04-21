require("./models/db");
const express =  require("express");
const app = express();
const bodyparser = require("body-parser");
const friendsController =  require("./controllers/friends");
const myfriendsController =  require("./controllers/myfriends");
const morgan = require("morgan");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(morgan("dev"));
app.use("/friends", friendsController);
app.use("/myfriends", myfriendsController);

//Error handling
app.use((req,res,next)=>{
    const error = new Error("Not found");
    error.status = 404;
    next( error )
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({error:{message:error.message}})
})

app.listen(4000, ()=> console.log("listening in 4000"));


