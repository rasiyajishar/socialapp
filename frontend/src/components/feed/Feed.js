



// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { AuthContext } from "../../context/AuthContext";
// import Post from "../post/Post";
// import Share from "../share/Share";
// import Comment from "../comment/Comment"; 

// function Feed({ username }) {
//   const [posts, setPosts] = useState([]);
//   const { user } = useContext(AuthContext);


  

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         if (!user) return; // Check if user is null
//         const res = username
//           ? await axios.get(`http://localhost:8800/api/posts/profile/${username}`)
//           : await axios.get(`http://localhost:8800/api/posts/timeline/${user._id}`);
//         setPosts(
//           res.data.sort((p1, p2) => {
//             return new Date(p2.createdAt) - new Date(p1.createdAt);
//           })
//         );
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };
//     fetchPosts();
//   }, [username, user]); // Include user in dependency array

//   return (
//     <div className="feed">
//       <div className="feedwrapper">
//         {user && (!username || username === user.username) && <Share />}
//         {posts.map((p) => (
//           <div key={p._id}>
//             <Post post={p} />
//             {/* Render the Comment component for each post */}
//             <Comment postId={p._id} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Feed;


// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { AuthContext } from "../../context/AuthContext";
// import Post from "../post/Post";
// import Share from "../share/Share";
// import Comment from "../comment/Comment"; 

// function Feed({ username,post}) {
//   const [posts, setPosts] = useState([]);
//   const { user } = useContext(AuthContext);
//     const [comments, setComments] = useState([]);

   
//     // useEffect(() => {
//     //       const fetchComments = async () => {
//     //         try {
//     //           const res = await axios.get(`http://localhost:8800/api/posts/${post._id}/comments`);
//     //           setComments(res.data);
//     //           console.log(res.data,'respose dasfsdf')
//     //         } catch (error) {
//     //           console.error("Error fetching comments:", error);
//     //         }
//     //       };
//     //       fetchComments();
//     //     }, );

    
 
    

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         if (!user) return;
//         const res = username
//           ? await axios.get(`http://localhost:8800/api/posts/profile/${username}`)
//           : await axios.get(`http://localhost:8800/api/posts/timeline/${user._id}`);
//         setPosts(
//           res.data.sort((p1, p2) => {
//             return new Date(p2.createdAt) - new Date(p1.createdAt);
//           })
//         );
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };
//     fetchPosts();
//   }, [username, user]); 

//   return (
//     <div className="feed">
//       <div className="feedwrapper">
//         {user && (!username || username === user.username) && <Share />}
//         {posts.map((p) => (
//           <div key={p._id}>
//             <Post post={p} />
            
           
           
//             {comments.map(comment => (
//           <div key={comment._id}>{comment.text}</div>
//         ))} 
           
//             {/* <Comment postId={p._id} /> */}
//             <Comment postId={p._id} comments={comments.filter(comment => comment.postId === p._id)} />


//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Feed;




import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import Post from "../post/Post";
import Share from "../share/Share";
import Comment from "../comment/Comment"; 

function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        if (!user) return;
        const res = username
          ? await axios.get(`http://localhost:8800/api/posts/profile/${username}`)
          : await axios.get(`http://localhost:8800/api/posts/timeline/${user._id}`);
        setPosts(
          res.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
        );
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, [username, user]); 




  useEffect(() => {
    const fetchComments = async () => {
      try {
        const promises = posts.map(async (post) => {
          const res = await axios.get(`http://localhost:8800/api/posts/${post._id}/comments`);
          return res.data;
        });
        const comments = await Promise.all(promises);
       
       
        setComments(comments.flat()); // Flatten the array of arrays
     
     
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
  
    fetchComments();
  }, [posts]);
  
  



  return (
    <div className="feed">
      <div className="feedwrapper">
        {user && (!username || username === user.username) && <Share />}
        {posts.map((p) => (
          <div key={p._id}>
            <Post post={p} />
            <Comment postId={p._id} comments={comments.filter(comment => comment.postId === p._id)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
