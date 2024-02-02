import "./rightbar.css"

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
                <li className="rightbarfriend">
                    <div className="rightbarimageprofilecontainer">
                  <img  className="rightbarprofileimg" src="/assets/prson/profile5.png" alt=""/>
                  <span className="rightbaronline"></span>

                    </div>
                    <span className="rightbarusername">jojo</span>
                </li>
                <li className="rightbarfriend">
                    <div className="rightbarimageprofilecontainer">
                  <img  className="rightbarprofileimg" src="/assets/prson/profile5.png" alt=""/>
                  <span className="rightbaronline"></span>

                    </div>
                    <span className="rightbarusername">jojo</span>
                </li>
                <li className="rightbarfriend">
                    <div className="rightbarimageprofilecontainer">
                  <img  className="rightbarprofileimg" src="/assets/prson/profile5.png" alt=""/>
                  <span className="rightbaronline"></span>

                    </div>
                    <span className="rightbarusername">jojo</span>
                </li>
                <li className="rightbarfriend">
                    <div className="rightbarimageprofilecontainer">
                  <img  className="rightbarprofileimg" src="/assets/prson/profile5.png" alt=""/>
                  <span className="rightbaronline"></span>

                    </div>
                    <span className="rightbarusername">jojo</span>
                </li>
            </ul>
            </div> 
            
            </div>
    )
}

export default Rightbar
