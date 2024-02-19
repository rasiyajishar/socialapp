// import "./closefriends.css"

// function Closefriends({user}) {

//     const PF = process.env.REACT_APP_PUBLIC_FOLDER;

//     return (
//         <li className='sidebarfriend' >
//         <img className='sidebarfriendimg' src={PF+user.profilePicture} alt=''/>
//     <span className='sidebarfriendname'>{user.username}</span>
//     </li>
//     )
// }

// export default Closefriends
// Closefriends.js

import {React} from "react";

import "./closefriends.css";

function Closefriends({ friends }) {
 

 
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend._id}>
          <img src={friend.profilePicture} alt={friend.username} />
          <span>{friend.username}</span>
         
        </li>
      ))}
    </ul>
  );
}

export default Closefriends;
