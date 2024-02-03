import "./rightbar.css"
import Online from "../online/Online"
import { Users } from "../../dummydatas"
function Rightbar({ user }) {

  const Homerightbar = () => {
    return (
      <>
        <div className="birthdaycontainer">
          <img className="birthdayimg" src="/assets/prson/gift.avif" alt="" />

          <span className="birthdaytext"><b>juli</b> and <b>3 other friends</b> havebirthday today</span>
        </div>
        <img className="rightbarad" src="/assets/prson/addimage1.webp" alt="" />
        <h4 className="rightbartitle">Online Friends</h4>
        <ul className="rightbarfriendlist">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}




        </ul>
      </>
    )
  };


  const Profilerightbar = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
      <>
        <h4 className="rightbartitle"> User Information</h4>
        <div className="rightbarinfo">
          <div className="rightbarinfoitem">

            <span className="rightbarinfokey">City:</span>
            <span className="rightbarinfovalue">{user.city}</span>
          </div>
          <div className="rightbarinfoitem">

            <span className="rightbarinfokey">From:</span>
            <span className="rightbarinfovalue">{user.from}</span>
          </div>
          <div className="rightbarinfoitem">

            <span className="rightbarinfokey">Relationship:</span>
            <span className="rightbarinfovalue">{user.relationship ===1 ? "single" :user.relationship ===1 ? "married" : "-" }</span>
          </div>

        </div>


        <h4 className="rightbartitle">User friends</h4>
        <div className="rightbarfollowings">
          <div className="rightbarfollowing">
            <img src={`${PF}prson/profile5.png`} alt="" className="rightbarfollowingimg" />
            <span rightbarfollowingname>joji</span>
          </div>
          <div className="rightbarfollowing">
            <img src={`${PF}prson/profile5.png`} alt="" className="rightbarfollowingimg" />
            <span rightbarfollowingname>joji</span>
          </div>
          <div className="rightbarfollowing">
            <img src={`${PF}prson/profile5.png`} alt="" className="rightbarfollowingimg" />
            <span rightbarfollowingname>joji</span>
          </div>
          <div className="rightbarfollowing">
            <img src={`${PF}prson/profile5.png`} alt="" className="rightbarfollowingimg" />
            <span rightbarfollowingname>joji</span>
          </div>
          <div className="rightbarfollowing">
            <img src={`${PF}prson/profile5.png`} alt="" className="rightbarfollowingimg" />
            <span rightbarfollowingname>joji</span>
          </div>

        </div>

      </>
    )
  }




  return (
    <div className="rightbar">
      <div className="rightbarwrapper">
       {user ? <Profilerightbar /> : <Homerightbar /> }
      </div>

    </div>
  )
}

export default Rightbar
