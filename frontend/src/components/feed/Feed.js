// import "./feed.css"
// import Share from "../share/Share"
// import Post from "../post/Post"
// import { useContext, useEffect, useState } from "react"
// import axios from "axios"
// import { AuthContext } from "../../context/AuthContext"

// function Feed({username}) {

//   const [posts, setPosts] = useState([])
//   const [text, seText] = useState("")
// const{user} = useContext(AuthContext)

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const res = username 
//       ?  await axios.get("/posts/profile/" + username)
//       : await axios.get("posts/timeline/" + user._id);

//       console.log(res)
//       setPosts(res.data.sort((p1,p2)=>{
//         return new Date(p2.createdAt) - new Date(p1.createdAt);
//       }))
//     };

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const res = username 
//           ? await axios.get(`/api/posts/profile/${username}`)
//           : await axios.get(`/api/posts/timeline/${user._id}`);
  
//         setPosts(res.data.sort((p1, p2) => {
//           return new Date(p2.createdAt) - new Date(p1.createdAt);
//         }));
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
    


//     fetchPosts();
//   }, [username,user._id])

//   return (
//     <div className="feed">
//       {/* <input type="text" onChange={e => seText(e.target.value)} /> */}
//       <div className="feedwrapper">
//         {(!username || username === user.username) && <Share />}
//         {posts.map(p=>(
//             <Post key={p._id} post={p}/>
//           ))}


//       </div>
//     </div>
//   )
// }

// export default Feed
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/" + user._id);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className="feed">
      <div className="feedwrapper">
      {(!username || username === user.username) && <Share />}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
