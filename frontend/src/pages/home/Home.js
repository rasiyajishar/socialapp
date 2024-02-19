import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import "./home.css"
import React, { useState } from "react";


function Home() {
    const [userId, setUserId] = useState()
    return (
        <div> 
            <Topbar /> 
            <div className="homecontainer">
            <Sidebar userId={userId} />
        <Feed />
        <Rightbar />
        </div>
          </div>
    )
}

export default Home


// import Feed from "../../components/feed/Feed";
// import Rightbar from "../../components/rightbar/Rightbar";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Topbar from "../../components/topbar/Topbar";
// import "./home.css";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Home() {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const fetchUser = async () => {
//             try {
//                 const response = await axios.get("http://localhost:8800/api/users");
//                 setUser(response.data); // Assuming the response contains user data
//             } catch (error) {
//                 console.error("Error fetching user:", error);
//             }
//         };

//         fetchUser();
//     }, []);

//     return (
//         <div> 
//             <Topbar user={user}/> 
//             <div className="homecontainer">
//                 <Sidebar userId={user ? user._id : null} />
//                 <Feed />
//                 <Rightbar />
//             </div>
//         </div>
//     );
// }

// export default Home;
