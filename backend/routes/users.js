const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");



//update user
userRouter.put("/:id", async (req, res) => {
    try {
        if (req.body.userId === req.params.id || !req.body.isAdmin) {
            if (req.body.password) {
                try {
                    const salt = await bcrypt.genSalt(10);
                    req.body.password = await bcrypt.hash(req.body.password, salt);
                } catch (error) {
                    return res.status(500).json(error);
                }
            }

            try {
                const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body });
                res.status(200).json("Account has been updated");
            } catch (error) {
                return res.status(500).json(error);
            }
        } else {
            return res.status(403).json("You can update only your account");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});




//delete user
// delete user
userRouter.delete("/:id", async (req, res) => {
    try {
        if (req.body.userId === req.params.id || !req.body.isAdmin) {
            try {
                await User.deleteOne({ _id: req.params.id }); // Corrected: pass an object to specify the document to delete
                res.status(200).json("Account has been deleted");
            } catch (error) {
                return res.status(500).json(error);
            }
        } else {
            return res.status(403).json("You can delete only your account");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});



// //get a user
// userRouter.get("/:id", async( req, res ) => {
//     try {
//        const user = await User.findById(req.params.id)
//        res.status(200).json(user)
//     } catch (error) {
//         res.status(500).json(error); 
//     }
// })



userRouter.get("/:id", async (req, res) => {
    try {
        console.log("Fetching user...");
        const user = await User.findById(req.params.id);
        const {password,updatedAt, ...other} = user._doc
        console.log("User:", user);
        res.status(200).json(other);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json(error);
    }
});



//follow  a user
userRouter.put("/:id/follow",async(req,res)=>{
    if(req.body.userId !== req.params.id){
        try {
           const user = await User.findById(req.params.id) ;
           const currentUser = await User.findById(req.body.userId);
           if(!user.followers.includes(req.body.userId)){
              await user.updateOne({ $push:{followers:req.body.userId}});
              await currentUser.updateOne({ $push:{followings:req.params.id}});
            res.status(200).json("user has been followed")
            }else{
            res.status(403).json("you already follow this user")
           }
        } catch (error) {
            res.status(500).json(error);
        }
    }else{
        res.status(403).json("you cant follow yourself")
    }
})



//unfollow
userRouter.put("/:id/unfollow",async(req,res)=>{
    if(req.body.userId !== req.params.id){
        try {
           const user = await User.findById(req.params.id) ;
           const currentUser = await User.findById(req.body.userId);
           if(user.followers.includes(req.body.userId)){
              await user.updateOne({ $pull:{followers:req.body.userId}});
              await currentUser.updateOne({ $pull:{followings:req.params.id}});
            res.status(200).json("user has been unfollowed")
            }else{
            res.status(403).json("you dont unfollow this user")
           }
        } catch (error) {
            res.status(500).json(error);
        }
    }else{
        res.status(403).json("you cant unfollow yourself")
    }
})

module.exports = userRouter;
