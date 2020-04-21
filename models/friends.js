const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
    name: {
    type: String,
    required:true
  },
  username: {
    type: String
  },
  dob: {
    type: String
  },
  friends: {
    type: Number
  },
  hobbies:{
    type: String
  }
});


mongoose.model("friends", employeeSchema);
