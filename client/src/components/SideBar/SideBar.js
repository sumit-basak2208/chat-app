import logo from "../../assets/logo.png"
import noProflie from "../../assets/no-profile-pic.png"
import "./SideBar.css"
import {Link} from "react-router-dom";
import AddGroupButton from "../AddGroupButton/AddGroupButton";

const SideBar = () => {

    return (
        <div className="side-bar">
            <img src={logo}/>
            <div className="hr"></div>
            <div className="navbar">
                <div className="navbar-top">
                    <Link to="/settings"><img className="profile-pic" title="Profile" src={noProflie}></img></Link>
                    <AddGroupButton/>
                </div>
                    <Link to="/login" className="button logout" title="logout"><i class="fa-solid fa-right-from-bracket"></i></Link>
            </div>
            
        </div>
    )
}

export default SideBar;