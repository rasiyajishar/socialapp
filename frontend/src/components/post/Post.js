import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';


import { format } from "timeago.js/dist/timeago.min.js"; // or the correct path

import { useContext, useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import Comment from "../comment/Comment"; 
function Post({ post,comments }) {

  // const user = Users.filter(u=>u.id===1)
  // console.log(user[0].username)
  const [like, setLike] = useState(post.likes.length)
  const [isliked, setIsLiked] = useState(false)
const[user,setUser]=useState({})
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
const {user:currentUser}=useContext(AuthContext)



useEffect(()=>{
  setIsLiked(post.likes.includes(currentUser._id))
},[currentUser._id, post.likes])


  





  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:8800/api/users?userId=${post.userId}`)
      
      setUser(res.data)
    };

    fetchUser();
  }, [post.userId])


  const likehandler = () => {
try{

  axios.put("http://localhost:8800/api/posts/"+ post._id + "/like",{userId:currentUser._id});
}
  catch(err){

  }



    setLike(isliked ? like - 1 : like + 1)
    setIsLiked(!isliked)
  };


  return (
    <div className="post">
      <div className="postwrapper">
        <div className="posttop">
          <div className="posttopleft">
            <Link to={`/profile/${user.username}`}>
            <img className="postprofileimg" src={user.profilePicture ? PF + user.profilePicture : PF+"prson/profile5.png"} alt="" />
            
            </Link>
           
            <span className="postusername">{user.username}</span>
            <span className="postdate">{format(post.createdAt)}</span>
          </div>
          <div className="posttopright">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postcenter">
          <span className="posttext">{post?.desc}</span>
          <img src={PF + post.img} alt="" className="postimage" />

        </div>
        <div className="postbottom">
          <div className="postbottomleft">
            <img src={`${PF}prson/like.png`} alt="" className="likeicon" onClick={likehandler} />
            <img src={`${PF}prson/heart.png`} alt="" className="likeicon" onClick={likehandler} />
            <span className="postlikecounter">{like} people like it</span>


          </div>
          <div className="postbottomright">
            <span className="postcommenttext">{comments} comments</span>
          </div>
          
          

        </div>

      </div>




    </div>





  )
}

export default Post


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { format } from "timeago.js/dist/timeago.min.js";
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import MoreVertIcon from '@mui/icons-material/MoreVert';

// function Post({ post }) {
//   const [like, setLike] = useState(post.likes.length);
//   const [isLiked, setIsLiked] = useState(false);
//   const [user, setUser] = useState({});
//   const { user: currentUser } = useContext(AuthContext);
//   const PF = process.env.REACT_APP_PUBLIC_FOLDER;
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     setIsLiked(post.likes.includes(currentUser._id));
//   }, [currentUser._id, post.likes]);

//   useEffect(() => {
//     const fetchComments = async () => {
//       try {
//         const res = await axios.get(`http://localhost:8800/api/posts/${post._id}/comments`);
//         setComments(res.data);
//       } catch (error) {
//         console.error("Error fetching comments:", error);
//       }
//     };
//     fetchComments();
//   }, [post._id]);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await axios.get(`http://localhost:8800/api/users?userId=${post.userId}`);
//         setUser(res.data);
//       } catch (error) {
//         console.error("Error fetching user:", error);
//       }
//     };
//     fetchUser();
//   }, [post.userId]);

//   const likeHandler = async () => {
//     try {
//       await axios.put(`http://localhost:8800/api/posts/${post._id}/like`, { userId: currentUser._id });
//       setLike(isLiked ? like - 1 : like + 1);
//       setIsLiked(!isLiked);
//     } catch (error) {
//       console.error("Error updating like:", error);
//     }
//   };

//   return (
//     <div className="post">
//       <div className="postwrapper">
//         <div className="posttop">
//           <div className="posttopleft">
//             <Link to={`/profile/${user.username}`}>
//               <img className="postprofileimg" src={user.profilePicture ? PF + user.profilePicture : PF + "prson/profile5.png"} alt="" />
//             </Link>
//             <span className="postusername">{user.username}</span>
//             <span className="postdate">{format(post.createdAt)}</span>
//           </div>
//           <div className="posttopright">
//             <MoreVertIcon />
//           </div>
//         </div>
//         <div className="postcenter">
//           <span className="posttext">{post?.desc}</span>
//           <img src={PF + post.img} alt="" className="postimage" />
//         </div>
//         <div className="postbottom">
//           <div className="postbottomleft">
//             <img src={`${PF}prson/like.png`} alt="" className="likeicon" onClick={likeHandler} />
//             <img src={`${PF}prson/heart.png`} alt="" className="likeicon" onClick={likeHandler} />
//             <span className="postlikecounter">{like} people like it</span>
//           </div>
//           <div className="postbottomright">
//             <span className="postcommenttext">{comments.length} comments</span>
//           </div>
//         </div>
//       </div>
//       <div className="comments">
//         {comments.map((comment) => (
//           <div key={comment._id} className="comment">
//             <p>{comment.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Post;
