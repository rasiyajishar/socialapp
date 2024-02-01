const postsRouter = require("express").Router();
const { Router } = require("express");
const Post = require("../models/Post")
const User =require("../models/User")
//create a post
postsRouter.post("/", async(req,res)=>{
const newPost = new Post(req.body)
try {
   const savedPost = await newPost.save();
   res.status(200).json(savedPost)
} catch (error) {
    res.status(500).json(error)
}
})



//update a post
postsRouter.put("/:id", async(req,res)=>{
    try{
    const post = await Post.findById(req.params.id);
    if(post.userId === req.body.userId){
         await post.updateOne({$set:req.body})   
         res.status(200).json("the post has been updated")
    }else{
        res.status(403).json("you can update only your post")
    }
}catch(error){
    res.status(500).json(error)
}

})



//delete post
postsRouter.delete("/:id", async(req,res)=>{
    try{
    const post = await Post.findById(req.params.id);
    if(post.userId === req.body.userId){
         await post.deleteOne()   
         res.status(200).json("the post has been deleted")
    }else{
        res.status(403).json("you can delete only your post")
    }
}catch(error){
    res.status(500).json(error)
}

})


//like/ dislike a post

postsRouter.put("/:id/like" , async( req,res)=>{
    try{

    const post = await Post.findById(req.params.id)
    if(!post.likes.includes(req.body.userId)){
        await post.updateOne({$push:{ likes:req.body.userId}})
        res.status(200).json("the post has been liked")
    }else{
        await post.updateOne({$pull:{likes:req.body.userId}})
        res.status(200).json("the post has been disliked")
    }
    }catch(error){
        res.status(500).json(error)
    } 
})


//get a post

postsRouter.get ("/:id", async (req,res)=>{
    try {
      const post =await Post.findById (req.params.id) 
      res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
})


//get timeline posts

// postsRouter.get("/timeline/all",async(req,res)=>{
    
//     try {
//         const currentUser = await User.findById(req.body.userId)
//         const userPosts = await Post.find({userId:currentUser._id})
//     const friendPosts = await Promise.all(
//     currentUser.followings.map((friendId) =>{
//       return  Post.find({userId:friendId});
//     })
//     );
//     res.json(userPosts.concat(...friendPosts))
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })


postsRouter.get("/timeline/all", async (req, res) => {
    try {
        const userId = req.body.userId; // Assuming user ID is sent in the request body

        const currentUser = await User.findById(userId); // Make sure to await the promise
        if (!currentUser) {
            return res.status(404).json({ message: "User not found" });
        }

        const userPosts = await Post.find({ userId: currentUser._id });
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) => {
                return Post.find({ userId: friendId });
            })
        );
        const allPosts = userPosts.concat(...friendPosts);
        res.json(allPosts);
    } catch (error) {
        console.error("Error fetching timeline posts:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


module.exports=postsRouter;
