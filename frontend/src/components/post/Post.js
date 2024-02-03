import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from "../../dummydatas"
function Post({post}) {

  // const user = Users.filter(u=>u.id===1)
  // console.log(user[0].username)
    return (
        <div className="post">
          <div className="postwrapper">
            <div className="posttop">
              <div className="posttopleft">
             <img className="postprofileimg" src={Users.filter((u)=> u.id === post.userId)[0].profilePicture} alt="" />
             <span className="postusername">{Users.filter((u)=> u.id === post.userId)[0].username}</span>
             <span className="postdate">{post.date}</span>
              </div>
              <div className="posttopright">
                <MoreVertIcon/>
              </div>
              </div>
            <div className="postcenter">
 <span className="posttext">{post?.desc}</span>
 <img src={post.photo} alt="" className="postimage"/>

            </div>
            <div className="postbottom">
              <div className="postbottomleft">
                <img src="/assets/prson/like.png" alt=""className="likeicon"/>
                <img src="/assets/prson/heart.png" alt=""className="likeicon"/>
              <span className="postlikecounter">{post.like} people like it</span>
              
              
              </div>
              <div className="postbottomright">
              <span className="postcommenttext">{post.comment} comments</span>
              </div>
              
            </div>
            
            </div>  
           </div>
    )
}

export default Post
