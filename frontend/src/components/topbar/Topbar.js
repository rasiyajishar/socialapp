import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Topbar() {
    const { user } = useContext(AuthContext);
    console.log(user);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className="topbarcontainer">
            {user && (
                <div className="topbarleft">
                    <Link to="/home" style={{ textDecoration: 'none' }}>
                        <span className="logo">socialapp</span>
                    </Link>
                </div>
            )}

            <div className="topbarcenter">
                <div className="searchbar">
                    <SearchIcon className="searchicon" />
                    <input placeholder="Search for friend, post, or videos" className="searchinput" />
                </div>
            </div>

            {user && (
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

                    <Link to={`/profile/${user.username}`}>
                        <img
                            src={user.profilePicture ? PF + user.profilePicture : PF + "prson/profile5.png"}
                            alt=""
                            className="topbarimg"
                        />
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Topbar;
