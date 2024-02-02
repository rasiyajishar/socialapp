import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
function Topbar() {
    return (
     <div className="topbarcontainer">
<div className="topbarleft">
    <span className="logo">socialapp</span>
</div>
<div className="topbarcenter">
    <div className="searchbar">
        <SearchIcon  className="searchicon"/>
        <input placeholder="Search for friend,post or videos" className="searchinput" />
    </div>
</div>
<div className="topbarright">
    <div className="topbarlinks">
        <span className="topbarlink">Homepage</span>
        <span className="topbarlink">Timeline</span>
    </div>
    <div className="topbarIcons">
        <div className="topbarIconitem">
        <PersonIcon />
        <span className="topbariconbadge">1</span>
        </div>
        <div className="topbarIconitem">
        <NotificationsIcon />
        <span className="topbariconbadge">2</span>
        </div>
        <div className="topbarIconitem">
        <ChatIcon />
        <span className="topbariconbadge">1</span>
        </div>
    </div>
    <img src="/assets/prson/profile6.png" alt="" className="topbarimg"/>
</div>

     </div>
    )
}

export default Topbar