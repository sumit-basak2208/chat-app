import "./MessageDrawer.css";
import logo from "../../assets/no-profile-pic.png";
import { useContext } from "react";
import { UserContext } from "../../pages/MainApp/MainApp";
import { useState } from "react";

// image file, for the time being used for designing ui
// you can remove it, later
import imgfile from "../../assets/ss.png";

const MessageDrawer = () => {
  const { isInfo, setIsInfo } = useContext(UserContext);
  console.log(isInfo);

  // temp logic , for designing ui,  this also you can remove it later.
  const [whetherImgOrText, setWhetherImgOrText] = useState(true);

  // temp another logic state for right side chat user
  const [rightSideImgOrText, setrightSideImgOrText] = useState(false);

  return (
    <div className="message-drawer">
      <div className="title-bar">
        <div className="left">
          <img src={logo} alt="Profile Pic" />
          <div className="group-name-member-online">
            <h2>Group Name</h2>
            <span>12 members, 5 Online</span>
          </div>
        </div>

        <ul className="right">
          <li>
            <button>
              <i class="fa-solid fa-video"></i>
            </button>
          </li>

          <li>
            <button>
              <i class="fa-solid fa-phone"></i>
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                setIsInfo(true);
              }}
            >
              <i className="fa-solid fa-circle-info" title="Info"></i>
            </button>
          </li>
        </ul>
      </div>

      <div className="chats">
        <div className="chat-container-left">
          <div className="chat-user-img-left">
            <img src={logo} alt="" />
          </div>
          <div className="chat-user-name-text-time-left">
            <div className="user-name-time-left">
              <h4>Dark Knight</h4>
              <span>11:50 PM</span>
            </div>
            <p>
              designing chat box asdhhdsajhfasjfh jhaskhnsafkdagujhlasfdl Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Vero ullam
              minus illo, et officia ex nihil, nesciunt officiis excepturi
              cumque aliquid deserunt, optio laborum accusantium itaque vel cum
              labore quisquam! hashj Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Iusto inventore quod, officiis modi aperiam quia
              architecto assumenda recusandae esse cum molestiae, optio magni
              odit neque! Eius voluptate praesentium assumenda officiis? Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Sunt expedita
              suscipit pariatur possimus ut temporibus earum accusantium quidem,
              voluptatum animi, sint qui vitae cumque dolores obcaecati
              doloremque hic ipsum quos.
            </p>
          </div>
        </div>

        <div className="chat-container-left">
          <div className="chat-user-img-left">
            <img src={logo} alt="" />
          </div>
          <div className="chat-user-name-text-time-left">
            <div className="user-name-time-left">
              <h4>Taher</h4>
              <span>11:50 PM</span>
            </div>
            <p>designing chat box asdhhdsajhfasjfh jhaskhnsafkdagujhlasfdl</p>
          </div>
        </div>

        <div className="chat-container-left">
          <div className="chat-user-img-left">
            <img src={logo} alt="" />
          </div>
          <div className="chat-user-name-text-time-left">
            <div className="user-name-time-left">
              <h4>Dark Knight</h4>
              <span>9:30 AM</span>
            </div>
            {/* logic whether it is image file or plain text */}
            {whetherImgOrText ? (
              <img src={imgfile} alt=""></img>
            ) : (
              <p>ahjhafhhfhsadfhhjdfshj</p>
            )}
          </div>
        </div>

        <div className="chat-container-right">
          <div className="chat-user-img-right">
            <img src={logo} alt="" />
          </div>
          <div className="chat-user-name-text-time-right">
            <div className="user-name-time-right">
              <h4>You</h4>
              <span>12:20 PM</span>
            </div>
            {whetherImgOrText ? (
              <img src={imgfile} alt=""></img>
            ) : (
              <p>ahjhafhhfhsadfhhjdfshj</p>
            )}
          </div>
        </div>

        <div className="chat-container-right">
          <div className="chat-user-img-right">
            <img src={logo} alt="" />
          </div>
          <div className="chat-user-name-text-time-right">
            <div className="user-name-time-right">
              <h4>You</h4>
              <span>12:20 PM</span>
            </div>
            {rightSideImgOrText ? (
              <img src={logo} alt=""></img>
            ) : (
              <p>ahjhafhhfhsadfhhjdfshj</p>
            )}
          </div>
        </div>

        <div className="chat-container-right">
          <div className="chat-user-img-right">
            <img src={logo} alt="" />
          </div>
          <div className="chat-user-name-text-time-right">
            <div className="user-name-time-right">
              <h4>You</h4>
              <span>12:20 PM</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
              dolorem. A odio qui vitae tempora fugiat! Voluptatibus sequi
              libero cupiditate. Tempora mollitia, expedita necessitatibus
              corrupti eligendi veritatis esse beatae quo. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ipsam adipisci iure quod ipsum
              porro voluptates id odit consectetur natus qui, atque rerum
              aspernatur odio sed, facilis ut. Ea, maxime recusandae? Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Facere, sunt
              aut! Nulla, assumenda unde soluta quaerat, dolores laboriosam ad,
              fugit tenetur aspernatur perferendis aliquid error? Temporibus
              nihil dolorum amet enim! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Pariatur laudantium accusantium, in fugiat dolor
              ipsam corrupti veritatis tempore est assumenda laborum,
              distinctio, maxime officia sed fugit mollitia iusto magnam
              maiores?
            </p>
          </div>
        </div>
      </div>

      <form>
        <ul className="send-message-drawer">
          <li>
            <button className="emoji-btn">
              <i className="fa-regular fa-face-smile"></i>
            </button>
          </li>
          <li>
            <input
              type="text"
              className="message-text"
              placeholder="Enter Message"
            />
          </li>
          <li>
            <button className="microphone">
              <i class="fa-solid fa-microphone"></i>
            </button>
          </li>
          <li>
            <button className="attachment">
              <i class="fa-solid fa-paperclip"></i>
            </button>
          </li>
          <li>
            <button className="send-btn">
              <i className="fa-regular fa-paper-plane"></i>
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default MessageDrawer;
