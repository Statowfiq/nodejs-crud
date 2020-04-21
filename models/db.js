const mongoose = require('mongoose');
mongoose.connect(`${process.env.CONNECTION}`,  { useUnifiedTopology: true },err => {
    if (!err) console.log("Mongoose connection succeeded.");
    else console.log("Error in DB connection", err);
  });


require("./friends");
require("./myfriends");