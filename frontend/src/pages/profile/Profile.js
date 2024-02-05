import "./profile.css"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import { useEffect, useState } from "react"
import axios from "axios";
import {useParams} from "react-router";
function Profile() {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
const[user,setUser]=useState({})
const username =useParams().username;



useEffect(() => {
  const fetchUser = async () => {
    const res = await axios.get(`/users?username=${username}`)
    console.log(res)
    setUser(res.data)
  }

  fetchUser();
}, [username])

    return (
        <div> 
        <Topbar /> 
        <div className="profile">
    <Sidebar />
    <div className="profileright">
   <div className="profilerighttop">
    <div className="profilecover">
    <img src={
      user.coverPicture
       ? PF+user.coverPicture 
       : PF+"post/custom coverphoto2.jpeg"
       } 
       alt="" className="profilecoverimg"/>
    <img src={
      user.profilePicture
       ? PF+user.profilePicture 
       : PF+"prson/profile5.png"
       } alt="" className="profileuserimg"/>
    </div>
    <div className="profileinfo">

      <h4 className="profileinfoname">{user.username}</h4>  
      <span className="profileinfodesc">{user.desc}</span>  
    </div>
    </div>
   <div className="profilerightbottom">
   <Feed username={username}/>
    <Rightbar user={user}/>
   </div>
   
   
    </div>
    
    </div>
      </div> 
    )
}

export default Profile
