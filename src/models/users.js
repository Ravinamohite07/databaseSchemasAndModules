const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    }
});

//const userModel = mongoose.model("User",userSchema);
//module.exports = userModel;
module.exports = mongoose.model("User",userSchema);