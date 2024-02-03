import "./rightbar.css"
import Online from "../online/Online"
import { Users } from "../../dummydatas"
function Rightbar({ profile }) {

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
    return (
      <>
        <h4 className="rightbartitle"> User Information</h4>
        <div className="rightbarinfo">
          <div className="rightbarinfoitem">

            <span className="rightbarinfokey">City:</span>
            <span className="rightbarinfovalue">New York</span>
          </div>
          <div className="rightbarinfoitem">

            <span className="rightbarinfokey">From:</span>
            <span className="rightbarinfovalue">Madrid</span>
          </div>
          <div className="rightbarinfoitem">

            <span className="rightbarinfokey">Relationship:</span>
            <span className="rightbarinfovalue">Single</span>
          </div>

        </div>


        <h4 className="rightbartitle">User friends</h4>
        <div className="rightbarfollowings">
          <div className="rightbarfollowing">
            <img src="/assets/prson/profile5.png" alt="" className="rightbarfollowingimg" />
            <span rightbarfollowingname>joji</span>
          </div>
          <div className="rightbarfollowing">
            <img src="/assets/prson/profile5.png" alt="" className="rightbarfollowingimg" />
            <span rightbarfollowingname>joji</span>
          </div>
          <div className="rightbarfollowing">
            <img src="/assets/prson/profile5.png" alt="" className="rightbarfollowingimg" />
            <span rightbarfollowingname>joji</span>
          </div>
          <div className="rightbarfollowing">
            <img src="/assets/prson/profile5.png" alt="" className="rightbarfollowingimg" />
            <span rightbarfollowingname>joji</span>
          </div>
          <div className="rightbarfollowing">
            <img src="/assets/prson/profile5.png" alt="" className="rightbarfollowingimg" />
            <span rightbarfollowingname>joji</span>
          </div>

        </div>

      </>
    )
  }




  return (
    <div className="rightbar">
      <div className="rightbarwrapper">
        <Profilerightbar />
      </div>

    </div>
  )
}

export default Rightbar
