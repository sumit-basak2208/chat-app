import "./MessageDrawer.css";
import logo from "../../assets/no-profile-pic.png";
import { useContext } from "react";
import { UserContext } from "../../pages/MainApp/MainApp";

const MessageDrawer = () => {

    const {isInfo, setIsInfo} = useContext(UserContext);
    console.log(isInfo);
    return (
        <div className="message-drawer">
            <div className="title-bar">
                <div className="left">
                    <img src={logo} alt="Profile Pic"/>
                    <h2>Group Name</h2>
                </div>
                <div className="space"></div>

                <button onClick={(e) => {setIsInfo(true)}}><i className="fa-solid fa-circle-info" title="Info"></i></button>
            </div>
            <div className="chats">
                <div className="chat-container">
                    <div className="chat left">
                        fdgbdfgdfgdr
                    <p className="sent-time">2:30</p>
                    </div>
                </div>
                <div className="chat-container">
                    <div className="chat right">
                        drgdfgdfgdf
                    <p className="sent-time">2:30</p>
                    </div>    
                </div>
            </div>
            <div className="send-message-drawer">
                <button className="emoji-button" title="Emoji"><i className="fa-regular fa-face-smile"></i></button>
                <span role="textbox" className="message-text" placeholder="Enter Message" contentEditable></span>
                <button className="send-button" title="Send"><i className="fa-regular fa-paper-plane"></i></button>
            </div>
        </div>
    )
}

export default MessageDrawer;