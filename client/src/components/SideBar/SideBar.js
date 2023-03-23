import "./SideBar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="side-bar">
      
      <ul className="navbar">
        <li>
          <Link to={'/'}>
            <i class="fa-solid fa-message"></i>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <i class="fa-solid fa-house mt-8"></i>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <i className="fa-solid fa-robot"></i>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <i className="fa-solid fa-user-group"></i>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <i className="fa-solid fa-plus"></i>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <i className="fa-solid fa-user"></i>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
