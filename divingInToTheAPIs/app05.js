const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/users");

app.use(express.json())

app.patch("/user",async (req,res) => {
    const userId = req.body.userId;
    const data = req.body;
    try{
        const user = await User.findByIdAndUpdate({_id: userId},data,
            {returnDocument:"before"});
            //{returnDocument:"after"}
        console.log(user);
        res.send("user updated successfully...!");
    } catch (err) {

        res.status(400).send("Something went wrong...!");

    }
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

