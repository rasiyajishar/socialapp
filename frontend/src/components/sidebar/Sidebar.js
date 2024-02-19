import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import GroupsIcon from '@mui/icons-material/Groups';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import EventIcon from '@mui/icons-material/Event';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import WorkIcon from '@mui/icons-material/Work';

import Closefriends from '../closefriends/Closefriends';

import React, { useEffect, useState } from "react";
import axios from "axios";

function Sidebar({ userId }) {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        const fetchFriends = async () => {
            try {
                console.log("User ID:", userId); // Check if userId is passed correctly
                if (userId) {
                    const response = await axios.get(`http://localhost:8800/api/users/friends/${userId}`);
                    console.log("Friends Response:", response.data); // Check the response from the API
                    setFriends(response.data);
                }
            } catch (error) {
                console.error("Error fetching friends:", error); // Log any errors
            }
        };
    
        fetchFriends();
    }, [userId]);
    

    return (
        <div className="sidebar">
            <div className='sidebarwrapper'>
                <ul className='sidebarlist'>
                    <li className='sidebarlistitem'>
                        <RssFeedIcon className='sidebarIcon' />
                        <span className="sidebarlistitemtext"> Feed</span>
                    </li>
                    <li className='sidebarlistitem'>
                        <ChatIcon className='sidebarIcon' />
                        <span className="sidebarlistitemtext"> Chats</span>
                    </li>
                    <li className='sidebarlistitem'>
                        <GroupsIcon className='sidebarIcon' />
                        <span className="sidebarlistitemtext"> Groups</span>
                    </li>
                    <li className='sidebarlistitem'>
                        <VideoLibraryIcon className='sidebarIcon' />
                        <span className="sidebarlistitemtext"> Videos</span>
                    </li>
                    <li className='sidebarlistitem'>
                        <EventIcon className='sidebarIcon' />
                        <span className="sidebarlistitemtext"> Events</span>
                    </li>
                    <li className='sidebarlistitem'>
                        <WorkIcon className='sidebarIcon' />
                        <span className="sidebarlistitemtext"> Jobs</span>
                    </li>
                    <li className='sidebarlistitem'>
                        <HelpCenterIcon className='sidebarIcon' />
                        <span className="sidebarlistitemtext"> Help</span>
                    </li>

                </ul>
                <button className='sidebarbutton'>Show More</button>
                <hr className='sidebarhr'/>
           <ul className='sidebarfriendlist'>


           <Closefriends friends={friends} />



           </ul>
           
           
            </div>
        </div>
    )
}

export default Sidebar
