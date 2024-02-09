
// import "./feed.css";
// import Share from "../share/Share";
// import Post from "../post/Post";
// import { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { AuthContext } from "../../context/AuthContext";

// function Feed({ username }) {
//   const [posts, setPosts] = useState([]);
//   const { user } = useContext(AuthContext);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         if (!user) return; // Check if user is null
//         const res = username
//           ? await axios.get("/api/posts/profile/" + username)
//           : await axios.get("/api/posts/timeline/" + user._id);
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
//         {(!username || username === (user && user.username)) && <Share />}
//         {posts.map((p) => (
//           <Post key={p._id} post={p} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Feed;


import "./feed.css";

import Post from "../post/Post";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import Share from "../share/Share";
function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       if (!user) return; // Check if user is null
  //       const res = username
  //         ? await axios.get(`http://localhost:8800/api/posts/profile/${username}`)
  //         : await axios.get(`http://localhost:8800/api/posts/timeline/${user._id}`);
  //       setPosts(
  //         res.data.sort((p1, p2) => {
  //           return new Date(p2.createdAt) - new Date(p1.createdAt);
  //         })
  //       );
  //     } catch (error) {
  //       console.error("Error fetching posts:", error);
  //     }
  //   };
  //   fetchPosts();
  // }, [username, user]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        if (!user) return; // Check if user is null
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
  }, [username, user]); // Include user in dependency array
  
  


//   return (
//     <div className="feed">
//       <div className="feedwrapper">
//         {(!username || username === (user && user.username)) && <Share /> }
//         {posts.map((p) => (
//           <Post key={p._id} post={p} />
//         ))}
//       </div>
//     </div>
//   );
// }

return (
  <div className="feed">
    <div className="feedwrapper">
      {user && (!username || username === user.username) && <Share />}
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </div>
  </div>
);

      }
export default Feed;
