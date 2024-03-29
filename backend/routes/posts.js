const postsRouter = require("express").Router();

const Post = require("../models/Post")
const User =require("../models/User")
const Comment = require("../models/Comment")

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
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
          await post.updateOne({ $push: { likes: req.body.userId } });
          res.status(200).json("The post has been liked");
        } else {
          await post.updateOne({ $pull: { likes: req.body.userId } });
          res.status(200).json("The post has been disliked");
        }
      } catch (err) {
        res.status(500).json(err);
      }
    });
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

postsRouter.get("/timeline/:userId",async(req,res)=>{
    
    try {
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({ userId: currentUser._id });
        const friendPosts = await Promise.all(
          currentUser.followings.map((friendId) => {
            return Post.find({ userId: friendId });
          })
        );
        res.status(200).json(userPosts.concat(...friendPosts));
      } catch (err) {
        res.status(500).json(err);
      }
    });
//get users all post
postsRouter.get("/profile/:username",async(req,res)=>{
    
    try {
        const user = await User.findOne({ username: req.params.username });
        const posts = await Post.find({ userId: user._id });
        res.status(200).json(posts);
      } catch (err) {
        res.status(500).json(err);
      }
    });


// postsRouter.get("/timeline/all", async (req, res) => {
//     try {
//         const userId = req.body.userId; // Assuming user ID is sent in the request body

//         const currentUser = await User.findById(userId); // Make sure to await the promise
//         if (!currentUser) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         const userPosts = await Post.find({ userId: currentUser._id });
//         const friendPosts = await Promise.all(
//             currentUser.followings.map((friendId) => {
//                 return Post.find({ userId: friendId });
//             })
//         );
//         const allPosts = userPosts.concat(...friendPosts);
//         res.json(allPosts);
//     } catch (error) {
//         console.error("Error fetching timeline posts:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });




// Create a comment on a post
postsRouter.post("/:postId/comments", async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const { userId, text } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "userId is required" });
    }

    if (!text) {
      return res.status(400).json({ message: "Comment text is required" });
    }

    const comment = new Comment({
      postId: post._id,
      userId: userId,
      text: text
    });

    await comment.save();

    post.comments.push(comment);
    await post.save();

    res.status(201).json({ message: "Comment created successfully", comment });
  } catch (error) {
    console.error("Error creating comment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Update a comment on a post
postsRouter.put("/:postId/comments/:commentId", async (req, res) => {
  try {

    console.log("Request Body:", req.body); // Log the request body
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    const commentIndex = post.comments.findIndex(
      (comment) => comment._id.toString() === req.params.commentId
    );
    if (commentIndex === -1) {
      return res.status(404).json({ message: "Comment not found" });
    }
    Object.assign(post.comments[commentIndex], req.body); // Update comment data
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    console.error("Error updating comment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete a comment on a post
postsRouter.delete("/:postId/comments/:commentId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    post.comments = post.comments.filter(
      (comment) => comment._id.toString() !== req.params.commentId
    );
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    console.error("Error deleting comment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});





// Fetch comments for a specific post
postsRouter.get("/:postId/comments", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId).populate("comments");
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(post.comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



module.exports=postsRouter;
