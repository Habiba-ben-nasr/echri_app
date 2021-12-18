const User = require("../models/User")


exports.addUser=async(req,res)=>{

    const new_user=new User({...req.body});

    try {
       
        await new_user.save();
        res.status(201).json({msg: "User added successfully"});
    } catch (error) {
        
        console.log("adding user failed",error);
        res.status(401).json({msg:"Adding user failed"});
    }

};