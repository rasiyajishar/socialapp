import "./online.css"

function Online({user}) {
    return (
        <li className="rightbarfriend">
                    <div className="rightbarimageprofilecontainer">
                  <img  className="rightbarprofileimg" src={user.profilePicture} alt=""/>
                  <span className="rightbaronline"></span>

                    </div>
                    <span className="rightbarusername">{user.username}</span>
                </li>
    )
}

export default Online
