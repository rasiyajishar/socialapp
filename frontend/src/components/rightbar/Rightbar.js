// import "./rightbar.css"
// import Online from "../online/Online"
// import { Users } from "../../dummydatas"
// import { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
// import AddIcon from '@mui/icons-material/Add';
// import CloseIcon from '@mui/icons-material/Close';
// function Rightbar({ user }) {
//   const PF = process.env.REACT_APP_PUBLIC_FOLDER;
// const[friends,setFriends]=useState([])
// const {user:currentUser,dispatch}=useContext(AuthContext);
// const [followed, setFollowed] = useState(currentUser.followings && currentUser.followings.includes(user?.id));

// // const [followed, setFollowed] = useState(
// //   currentUser.followings.includes(user?.id)
// // );





// useEffect(() => {
//   if (user) { // Check if user object is defined
//     const getfriends = async () => {
//       try {
//         const friendlist = await axios.get("/api/users/friends/" + user._id);
//         setFriends(friendlist.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getfriends();
//   }
// }, [user]);


// const handleClick = async ()=>{
//   try {
//     if(followed){
//       await axios.put(`/api/users/${user._id}/unfollow`,{userId:currentUser._id,});
//     dispatch({type:"UNFOLLOW",payload:user._id})
    
//     }else{
//       await axios.put(`/api/users/${user._id}/follow`,{userId:currentUser._id});
//       dispatch({type:"FOLLOW",payload:user._id});
//     }
//   } catch (error) {
//     console.log(error)
//   }
//   setFollowed(!followed)
// }

//   const Homerightbar = () => {
//     return (
//       <>
//         <div className="birthdaycontainer">
//           <img className="birthdayimg" src="/assets/prson/gift.avif" alt="" />

//           <span className="birthdaytext"><b>juli</b> and <b>3 other friends</b> havebirthday today</span>
//         </div>
//         <img className="rightbarad" src="/assets/prson/addimage1.webp" alt="" />
//         <h4 className="rightbartitle">Online Friends</h4>
//         <ul className="rightbarfriendlist">
//           {Users.map((u) => (
//             <Online key={u.id} user={u} />
//           ))}




//         </ul>
//       </>
//     );
//   };


//   const Profilerightbar = () => {
//     const PF = process.env.REACT_APP_PUBLIC_FOLDER;
//     return (
//       <>
//       {user.username !== currentUser.username && (
//         <button className="rightbarfollowbutton" onClick={handleClick}>
//           {followed ? "unfollow" :"follow"}
//           {followed ? <CloseIcon /> : <AddIcon />}


//         </button>
//       )}
//         <h4 className="rightbartitle"> User Information</h4>
//         <div className="rightbarinfo">
//           <div className="rightbarinfoitem">

//             <span className="rightbarinfokey">City:</span>
//             <span className="rightbarinfovalue">{user.city}</span>
//           </div>
//           <div className="rightbarinfoitem">

//             <span className="rightbarinfokey">From:</span>
//             <span className="rightbarinfovalue">{user.from}</span>
//           </div>
//           <div className="rightbarinfoitem">

//             <span className="rightbarinfokey">Relationship:</span>
//             <span className="rightbarinfovalue">{user.relationship ===1 ? "single" :user.relationship ===1 ? "married" : "-" }</span>
//           </div>

//         </div>


//         <h4 className="rightbartitle">User friends</h4>
        
        
//         <div className="rightbarfollowings">
//           {friends.map((friend)=>(

//           <Link to={"/profile/"+friend.username} style={{textDecoration:"none"}}>
//           <div className="rightbarfollowing">
//             <img src={friend.profilePicture ? PF+friend.profilePicture : PF+"prson/profile5.png"} alt="" className="rightbarfollowingimg" />
//             <span rightbarfollowingname>{friend.username}</span>
//           </div>
//           </Link>
//           ))}

//         </div>

//       </>
//     )
//   }




//   return (
//     <div className="rightbar">
//       <div className="rightbarwrapper">
//        {user ? <Profilerightbar /> : <Homerightbar /> }
//       </div>

//     </div>
//   )
// }

// export default Rightbar


import "./rightbar.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Online from "../online/Online";
 import { Users } from "../../dummydatas";
function Rightbar({ user }) {
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  
  const [followed, setFollowed] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;


  useEffect(() => {
    const getFriends = async () => {
      try {
        if (user && user._id) {// Check if user object is defined
          const friendlist = await axios.get(`/api/users/friends/${user._id}`);
          console.log(friendlist)
          setFriends(friendlist.data);
          
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (currentUser && user) { // Check if currentUser and user objects are defined
      getFriends();
      // setFollowed(currentUser.followings && currentUser.followings.includes(user._id));
      setFollowed(currentUser.followings?.includes(user._id)); // Use optional chaining
    }
  }, [user, currentUser]);

  

  


  // const handleClick = async () => {
  //   try {
  //     if (followed && user) { // Check if followed and user objects are defined
  //       await axios.put(`/api/users/${user._id}/unfollow`, { userId: currentUser._id });
  //       dispatch({ type: "UNFOLLOW", payload: user._id });
  //     } else if (user) {
  //       await axios.put(`/api/users/${user._id}/follow`, { userId: currentUser._id });
  //       dispatch({ type: "FOLLOW", payload: user._id });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   setFollowed(!followed);
  // };

  const handleClick = async () => {
    try {
      // Check if user and user._id are defined
      if (user && user._id) {
        if (followed) {
          await axios.put(`/api/users/${user._id}/unfollow`, { userId: currentUser._id });
          dispatch({ type: "UNFOLLOW", payload: user._id });
        } else {
          await axios.put(`/api/users/${user._id}/follow`, { userId: currentUser._id });
          dispatch({ type: "FOLLOW", payload: user._id });
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setFollowed(!followed);
  };



  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
        <img className="birthdayimg" src="/assets/prson/gift.avif" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarad" src="/assets/prson/addimage1.webp" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <CloseIcon /> : <AddIcon />}

          </button>
        )}
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 1
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {friends.map(friend => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "prson/profile5.png"
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
export default Rightbar
