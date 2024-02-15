
// import React, { useState } from "react";
// import axios from "axios";
// import { AuthContext } from "../../context/AuthContext";
// import { useContext } from "react";



// const Comment = ({ postId }) => {
//     const [commentText, setCommentText] = useState("");
//     const {user:currentUser}=useContext(AuthContext)
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//          const res = await axios.post(`http://localhost:8800/api/posts/${postId}/comments`, {
//               userId: currentUser._id, 
//               text: commentText 
//           });
//           console.log(res)
//           setCommentText("");
//       } catch (error) {
//           console.error("Error adding comment:", error);
//       }
//   };
  
     
//     return (

      
//         <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Add a comment..."
//           value={commentText}
//           onChange={(e) => setCommentText(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//   )

  
// }

// export default Comment



import React, { useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import "./comment.css";

const Comment = ({ postId, comments }) => {
  const [commentText, setCommentText] = useState("");
  const { user: currentUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8800/api/posts/${postId}/comments`, {
        userId: currentUser._id,
        text: commentText 
      });
      console.log(res);
      setCommentText("");
      window.location.reload();
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };
  
  return (
    <div className="comment">
      {comments && comments.map((comment) => (
        <div key={comment._id}>
          
                  <p className="commenttext">{comment.text}</p>
         
         
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Comment;
