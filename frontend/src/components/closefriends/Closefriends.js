import "./closefriends.css"

function Closefriends({user}) {
    return (
        <li className='sidebarfriend' >
        <img className='sidebarfriendimg' src={user.profilePicture} alt=''/>
    <span className='sidebarfriendname'>{user.username}</span>
    </li> 
    )
}

export default Closefriends
