import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"

function Home() {
    return (
        <div> 
            <Topbar /> 
            <div>
        <Sidebar />
        <Rightbar />
        <Feed />
        </div>
          </div>
    )
}

export default Home
