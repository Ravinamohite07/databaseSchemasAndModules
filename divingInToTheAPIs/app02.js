const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/users");

app.use(express.json())

app.post("/signup",async (req,res) =>{
    //console.log(req);
    //console.log(req.body);
    // creating new instance of user model
     const user = new User(req.body);
     try{
        await user.save();
     res.send("user added successfully..!") 
     }catch(err){
        res.status(400).send("Error saving the user:" + err.message);
     }; 
}); 

//GET user by lastName
app.get("/user", async (req,res) =>{
    const userLastname = req.body.lastName;
    try{

       const user = await User.find({lastName: userLastname});
       res.send(user);

    }catch (err){

        res.status(400).send("Something went wrong...!");

    }
});

//feed API - GET/feed - get all the users from the database
app.get("/feed",(req,res) => {

}) 

connectDB()
  .then(() =>{
     console.log("Database connection established...!");
     app.listen(3000,() => {
        console.log("Server successfully run on port 3000..!");
    })
  }).catch((err) => {
     console.log("Database cannot connection established..!!");
  });

