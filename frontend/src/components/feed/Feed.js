import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import { useEffect, useState } from "react"
import axios from "axios"
function Feed({username}) {

  const [posts, setPosts] = useState([])
  const [text, seText] = useState("")

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username 
      ?  await axios.get("/posts/profile/" + username)
      : await axios.get("/posts/timeline/65bb067ff0b3afca39dba1fd");

      console.log(res)
      setPosts(res.data)
    }

    fetchPosts();
  }, [])

  return (
    <div className="feed">
      {/* <input type="text" onChange={e => seText(e.target.value)} /> */}
      <div className="feedwrapper">
        <Share />
        {posts.map(p=>(
            <Post key={p._id} post={p}/>
          ))}


      </div>
    </div>
  )
}

export default Feed
