// import "./share.css"
// import MoodIcon from '@mui/icons-material/Mood';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import LabelIcon from '@mui/icons-material/Label';
// import PermMediaIcon from '@mui/icons-material/PermMedia';
// import { useContext, useRef, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import axios from "axios";
// import CancelIcon from '@mui/icons-material/Cancel';
// function Share() {

// const {user}=useContext(AuthContext)
// const PF = process.env.REACT_APP_PUBLIC_FOLDER;
// const desc = useRef()
// const[file,setFile] = useState(null)



//  const submitHandler = async (e) => {
//     e.preventDefault();
// //     if (!user || !user._id) {
// //         console.error("User or user ID is undefined");
// //         return;
// //     }

//    const newPost = {
//       userId: user._id,
//         desc: desc.current.value,
//      };

//      if (file) {
//         const data = new FormData();
//       const fileName = Date.now() + file.name;
      
//         data.append("name", fileName);
//         data.append("file", file);
//     newPost.img = fileName;
//     console.log(newPost);

//          try {
//            await axios.post("/upload", data);
      
//        } catch (error) {
//            console.error("Error uploading file:", error);
//         }
//     }

//  try {
//     await axios.post("http://localhost:5000/api/posts/", newPost);

// window.location.reload();
//     } catch (error) {
//         console.error("Error creating new post:", error);
//     }
// };



   


//     return (
//         <div className="share">
//             <div className="sharewrapper">
//                 <div className="sharetop">
//                     <img src={user.profilePicture ? PF+user.profilePicture : PF+"prson/profile5.png"} alt="" className="shareprofileimg" />
//                     <input placeholder={"whats in your mind "+ user.username + "?" } className="shareinput" ref={desc} />
//                 </div>
//                 <hr className="sharehr" />

// {file && (
//     <div className="shareimgcontainer">
//       <img className="shareimg" src={URL.createObjectURL(file)} alt=""/>  
//    <CancelIcon className="sharecancelimg"  onClick={()=>setFile(null)} />
//     </div>
// )}

//                 <form className="sharebottom" onSubmit={submitHandler}>

//                     <div className="shareoptions">

//                         <label htmlFor="file" className="shareoption">
//                             <PermMediaIcon htmlColor="tomato" className="shareicon"/>
//                             <span className="shareoption text">Photo or Video</span>
                        
//                         <input style={{display:"none"}} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e)=>setFile(e.target.files[0])}/>
//                         </label>


//                         <div className="shareoption">
//                             <MoodIcon htmlColor="golden" className="shareicon"/>
//                             <span className="shareoptiontext">Feelings</span>
//                         </div>
//                         <div className="shareoption">
//                             <LocationOnIcon htmlColor="green" className="shareicon"/>
//                             <span className="shareoption text">Location</span>
//                         </div>
//                         <div className="shareoption">
//                             <LabelIcon htmlColor="blue" className="shareicon"/>
//                             <span className="shareoption text">Tag</span>
//                         </div>
//                     </div>
//                     <button className="sharebutton" type="submit">Share</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Share


import "./share.css";
import MoodIcon from '@mui/icons-material/Mood';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LabelIcon from '@mui/icons-material/Label';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import CancelIcon from '@mui/icons-material/Cancel';

function Share() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;

      try {
        // await axios.post("/api/upload", data);
        await axios.post("http://localhost:8800/api/upload/", data);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }

    try {
    //   await axios.post("/api/posts/", newPost);
    await axios.post("http://localhost:8800/api/posts/", newPost);
      window.location.reload();
    } catch (error) {
      console.error("Error creating new post:", error);
    }
  };

  return (
    <div className="share">
      <div className="sharewrapper">
        <div className="sharetop">
          <img src={user?.profilePicture ? PF + user.profilePicture : PF + "prson/profile5.png"} alt="" className="shareprofileimg" />
          <input placeholder={"What's in your mind, " + (user ? user.username : "") + "?"} className="shareinput" ref={desc} />
        </div>
        <hr className="sharehr" />

        {file && (
          <div className="shareimgcontainer">
            <img className="shareimg" src={URL.createObjectURL(file)} alt="" />
            <CancelIcon className="sharecancelimg" onClick={() => setFile(null)} />
          </div>
        )}

        <form className="sharebottom" onSubmit={submitHandler}>
          <div className="shareoptions">
            <label htmlFor="file" className="shareoption">
              <PermMediaIcon htmlColor="tomato" className="shareicon"/>
              <span className="shareoption text">Photo or Video</span>
              <input style={{display:"none"}} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e)=>setFile(e.target.files[0])}/>
            </label>

            <div className="shareoption">
              <MoodIcon htmlColor="golden" className="shareicon"/>
              <span className="shareoptiontext">Feelings</span>
            </div>
            <div className="shareoption">
              <LocationOnIcon htmlColor="green" className="shareicon"/>
              <span className="shareoption text">Location</span>
            </div>
            <div className="shareoption">
              <LabelIcon htmlColor="blue" className="shareicon"/>
              <span className="shareoption text">Tag</span>
            </div>
          </div>
          <button className="sharebutton" type="submit">Share</button>
        </form>
      </div>
    </div>
  );
}

export default Share;
