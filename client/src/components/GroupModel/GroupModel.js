import "./GroupModel.css";
import noProfilePic from "../../assets/no-profile-pic.png";

const GroupModel = (props) => {

    return (
        <div className="group-model">
            <div className="flex-left">
                <img src={noProfilePic} alt="Profile Pic"/>
                <div className="flex-cols">
                    <h5>{props.name}</h5>
                    <p>{props.message}</p>
                </div>
            </div>
            <p className="time">{props.time}</p>
        </div>
    )
}

export default GroupModel;