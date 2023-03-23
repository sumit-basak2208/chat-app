import { useContext, useState } from "react";
import { UserContext } from "../../pages/MainApp/MainApp";
import GroupModel from "../GroupModel/GroupModel";
import "./ChatDrawer.css";

const ChatDrawer = () => {
  const { chats } = useContext(UserContext);

  const [searchedChat, setSearchedChat] = useState("");
  const search = (chats) => {
    return chats.filter((chat) => {
      return (
        chat["chatName"].toLowerCase().indexOf(searchedChat.toLowerCase()) > -1
      );
    });
  };

  return (
    <div className="chat-drawer">
      <div className="logo">
        <h1>Textify</h1>
      </div>
      <h1>Messages</h1>

      <div className="search-bar-container">
        <div className="search-bar">
          <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
          <input
            type="search"
            placeholder="Search Groups"
            onChange={(e) => {
              setSearchedChat(e.target.value);
            }}
          ></input>
        </div>
      </div>

      <div className="group-container">
        {searchedChat === ""
          ? chats.map((chat) => (
              <GroupModel
                name={chat.chatName}
                message="Message 1"
                time="3:40"
              />
            ))
          : search(chats).map((chat) => (
              <GroupModel
                name={chat.chatName}
                message="Message 1"
                time="3:40"
              />
            ))}
      </div>
    </div>
  );
};

export default ChatDrawer;
