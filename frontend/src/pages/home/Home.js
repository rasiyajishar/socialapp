import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import "./home.css"


function Home() {
    return (
        <div> 
            <Topbar /> 
            <div className="homecontainer">
        <Sidebar />
        <Feed />
        <Rightbar />
        </div>
          </div>
    )
}

export default Home
