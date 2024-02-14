
import React, { useState } from "react";
import axios from "axios";

const Comment = ({ postId }) => {
    const [commentText, setCommentText] = useState("");
  
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post(`http://localhost:8800/api/posts/${postId}/comments`, { text: commentText });
          setCommentText("");
        } catch (error) {
          console.error("Error adding comment:", error);
        }
      };
  
    return (
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
  )
}

export default Comment
