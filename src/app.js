const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/users");

app.post("/signup",async (req,res) =>{
    // creating new instance of user model
    const user = new User({
        firstName: "Nikita",
        lastName: "Nikam"
    });
     try{
        await user.save();
     res.send("user added successfully..!") 
     }catch(err){
        res.status(400).send("Error saving the user:" + err.message);
     }
});

connectDB()
  .then(() =>{
     console.log("Database connection established...!");
     app.listen(3000,() => {
        console.log("Server successfully run on port 3000..!");
    })
  }).catch((err) => {
     console.log("Database cannot connection established..!!");
  });

