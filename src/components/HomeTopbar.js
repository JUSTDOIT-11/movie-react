import { FaAlignJustify, FaSearch, FaBars, FaPlus } from "react-icons/fa";
import { MdAnnouncement } from "react-icons/md";
//import { FaInstagram } from "react-icons/fa";
//import { FiTwitter } from "react-icons/fi";
import { Topbar } from "./CSS/Topbar.css";

/**상단 바*/
function HomeTopbar() {
  const titleClick = () => window.location.reload();

  return (
    <div className="top-bar-box">
      <div className="left-box">
        <h1 onClick={titleClick}>The Movies!</h1>
      </div>

      <div className="right-box">
        <div className="option-box">
          <FaSearch />
          <h3>Search</h3>
        </div>
        <div className="option-box">
          <FaBars />
          <h3>Menu</h3>
        </div>
        <div className="option-box">
          <FaPlus />
          <h3>About</h3>
        </div>
        <div className="option-box">
          <MdAnnouncement />
          <h3>Feedback</h3>
        </div>
      </div>
    </div>
  );
}

export default HomeTopbar;
