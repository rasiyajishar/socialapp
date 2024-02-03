import "./profile.css"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
function Profile() {
    return (
        <div> 
        <Topbar /> 
        <div className="profile">
    <Sidebar />
    <div className="profileright">
   <div className="profilerighttop">
    <div className="profilecover">
    <img src="/assets/post/coverpost8.avif" alt="" className="profilecoverimg"/>
    <img src="/assets/prson/profile6.png" alt="" className="profileuserimg"/>
    </div>
    <div className="profileinfo">

      <h4 className="profileinfoname">aalia</h4>  
      <span className="profileinfodesc">helliooooooooooooooo</span>  
    </div>
    </div>
   <div className="profilerightbottom">
   <Feed />
    <Rightbar profile/>
   </div>
   
   
    </div>
    
    </div>
      </div> 
    )
}

export default Profile
