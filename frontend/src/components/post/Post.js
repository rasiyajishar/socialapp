import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
function Post() {
    return (
        <div className="post">
          <div className="postwrapper">
            <div className="posttop">
              <div className="posttopleft">
             <img className="postprofileimg" src="/assets/prson/profile6.png" alt="" />
             <span className="postusername">aalia</span>
             <span className="postdate">5 mins ago</span>
              </div>
              <div className="posttopright">
                <MoreVertIcon/>
              </div>
              </div>
            <div className="postcenter">
 <span className="posttext">hey its my first post</span>
 <img src="/assets/prson/post14.avif" alt="" className="postimage"/>

            </div>
            <div className="postbottom">
              <div className="postbottomleft">
                <img src="/assets/prson/like.png" alt=""className="likeicon"/>
                <img src="/assets/prson/heart.png" alt=""className="likeicon"/>
              <span className="postlikecounter">32 people like it</span>
              
              
              </div>
              <div className="postbottomright">
              <span className="postcommenttext">9 comments</span>
              </div>
              
            </div>
            
            </div>  
           </div>
    )
}

export default Post
