import { createContext, useEffect, useState } from "react";
import ChatDrawer from "../../components/ChatDrawer/ChatDrawer";
import MessageDrawer from "../../components/MesageDrawer/MessageDrawer";
import SideBar from "../../components/SideBar/SideBar"
import "./MainApp.css"
import axios from "axios";

export const UserContext = createContext();

const MainApp = () => {
    
    const [chats, setChats] = useState([])
    const [isInfo, setIsInfo] = useState(false);

    const fetchData = async() => {
        const {data} = await axios.get("/api/chat");
        setChats(data)
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="main-app">
            <UserContext.Provider value={{isInfo, setIsInfo, chats}}>
            <SideBar/>
            <ChatDrawer/>
            {isInfo ? <h1>tfhfgthg</h1>: <MessageDrawer/>}
            </UserContext.Provider>
        </div>
    )
}

export default MainApp;