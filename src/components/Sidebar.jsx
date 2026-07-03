import { Link } from "react-router-dom";
import {
  FaHome,
  FaUpload,
  FaVideo,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="sidebar-logo">
        ClipMind AI
      </div>

      <ul>

        <li>
          <Link to="/creator-dashboard">
            <FaHome /> Dashboard
          </Link>
        </li>

        <li>
          <Link to="/upload-video">
            <FaUpload /> Upload Video
          </Link>
        </li>

        <li>
          <Link to="/creator/myvideos">
            <FaVideo /> Videos
          </Link>
        </li>

        <li>
          <Link to="/">
            <FaSignOutAlt /> Logout
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;