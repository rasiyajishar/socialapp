import "./share.css"
import MoodIcon from '@mui/icons-material/Mood';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LabelIcon from '@mui/icons-material/Label';
import PermMediaIcon from '@mui/icons-material/PermMedia';
function Share() {
    return (
        <div className="share">
            <div className="sharewrapper">
                <div className="sharetop">
                    <img src="/assets/prson/profile6.png" alt="" className="shareprofileimg" />
                    <input placeholder="whats in your mind?" className="shareinput" />
                </div>
                <hr className="sharehr" />
                <div className="sharebottom">

                    <div className="shareoptions">

                        <div className="shareoption">
                            <PermMediaIcon htmlColor="tomato" className="shareicon"/>
                            <span className="shareoption text">Photo or Video</span>
                        </div>
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
                    <button className="sharebutton">Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share
