import "./online.css"

function Online({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="rightbarfriend">
                    <div className="rightbarimageprofilecontainer">
                  <img  className="rightbarprofileimg" src={PF+user.profilePicture} alt=""/>
                  <span className="rightbaronline"></span>

                    </div>
                    <span className="rightbarusername">{user.username}</span>
                </li>
    )
}

export default Online
