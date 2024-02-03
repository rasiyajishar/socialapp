import "./closefriends.css"

function Closefriends({user}) {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <li className='sidebarfriend' >
        <img className='sidebarfriendimg' src={PF+user.profilePicture} alt=''/>
    <span className='sidebarfriendname'>{user.username}</span>
    </li> 
    )
}

export default Closefriends
