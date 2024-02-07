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

function Rightbar({ user }) {
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  useEffect(() => {
    const getFriends = async () => {
      try {
        if (user) { // Check if user object is defined
          const friendlist = await axios.get(`/api/users/friends/${user._id}`);
          setFriends(friendlist.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (currentUser && user) { // Check if currentUser and user objects are defined
      getFriends();
      setFollowed(currentUser.followings && currentUser.followings.includes(user._id));
    }
  }, [user, currentUser]);

  const handleClick = async () => {
    try {
      if (followed && user) { // Check if followed and user objects are defined
        await axios.put(`/api/users/${user._id}/unfollow`, { userId: currentUser._id });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else if (user) {
        await axios.put(`/api/users/${user._id}/follow`, { userId: currentUser._id });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
    } catch (error) {
      console.log(error);
    }
    setFollowed(!followed);
  };

  return (
    <div className="rightbar">
      <div className="rightbarwrapper">
        {currentUser && user ? (
          <>
            {user.username !== currentUser.username && (
              <button className="rightbarfollowbutton" onClick={handleClick}>
                {followed ? "Unfollow" : "Follow"}
                {followed ? <CloseIcon /> : <AddIcon />}
              </button>
            )}
            <h4 className="rightbartitle">User Information</h4>
            <div className="rightbarinfo">
              {/* User information details */}
            </div>
            <h4 className="rightbartitle">User Friends</h4>
            <div className="rightbarfollowings">
              {/* User friends list */}
            </div>
          </>
        ) : (
          <>
            <div className="birthdaycontainer">
              {/* Birthday container */}
            </div>
            <img className="rightbarad" src="/assets/prson/addimage1.webp" alt="" />
            <h4 className="rightbartitle">Online Friends</h4>
            {/* <ul className="rightbarfriendlist">
            <div className="rightbarfollowings">
          {friends.map((friend)=>(

        <Link to={"/profile/"+friend.username} style={{textDecoration:"none"}}>
          <div className="rightbarfollowing">
            <img src={friend.profilePicture ? PF+friend.profilePicture : PF+"prson/profile5.png"} alt="" className="rightbarfollowingimg" />
            <span rightbarfollowingname>{friend.username}</span>
         </div>
         </Link>
         ))}

     </div>
            </ul> */}
          </>
        )}
      </div>
    </div>
  );
}

export default Rightbar;
