import "./rightbar.css"
import Online from "../online/Online"
import {Users} from "../../dummydatas"
function Rightbar() {
    return (
        <div className="rightbar">
           <div className="rightbarwrapper">
            <div className="birthdaycontainer">
              <img className="birthdayimg" src="/assets/prson/gift.avif" alt=""/>
          
          <span className="birthdaytext"><b>juli</b> and <b>3 other friends</b> havebirthday today</span>
            </div>
            <img className="rightbarad" src="/assets/prson/addimage1.webp" alt=""/>
            <h4 className="rightbartitle">Online Friends</h4>
            <ul className="rightbarfriendlist">
              {Users.map(u=>(
                <Online key={u.id} user={u}/>
              ))}
                
                
               
                
            </ul>
            </div> 
            
            </div>
    )
}

export default Rightbar
